const { ipcMain } = require('electron');
const path = require('path');
const request = require('request');

const fileStorage = require('../services/fileStorage');
const wallpaper = require('../utils/wallpaper');

const EVENTS = {
  WALLPAPER_SET: 'WALLPAPER_SET',
  WALLPAPER_SET_RESULT: 'WALLPAPER_SET_RESULT'
};

const initIpcModule = () => {
  ipcMain.on(EVENTS.WALLPAPER_SET, async (event, { uri, name }) => {
    const file = fileStorage.saveFileThroughWriteStream({
      fileName: name
    });

    request(uri)
      .on('end', async () => {
        const result = await wallpaper.set(file.path);

        event.sender.send(EVENTS.WALLPAPER_SET_RESULT, {
          err: result.err
        });
      })
      .on('error', async err => {
        event.sender.send(EVENTS.WALLPAPER_SET_RESULT, {
          err
        });
      })
      .pipe(file.writeStream);
  });
};

module.exports = { initIpcModule };
