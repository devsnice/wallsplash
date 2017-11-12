const { ipcMain } = require('electron');
const path = require('path');
const request = require('request');

const fileStorage = require('../services/fileStorage');
const wallpaper = require('../utils/wallpaper');

const EVENTS_GET = {
  WALLPAPER_SET: 'WALLPAPER_SET'
};

const EVENTS_SEND = {
  WALLPAPER_IS_PENDING: 'WALLPAPER_IS_PENDING',
  WALLPAPER_SUCCESS: 'WALLPAPER_SUCCESS',
  WALLPAPER_FAILURE: 'WALLPAPER_FAILURE'
};

const eventSendIsPending = ({ event, name }) => {
  event.sender.send(EVENTS_SEND.WALLPAPER_IS_PENDING, {
    data: {
      image: {
        name
      }
    }
  });
};

const eventSendSuccess = ({ event, name }) => {
  event.sender.send(EVENTS_SEND.WALLPAPER_SUCCESS, {
    data: {
      image: {
        name
      }
    }
  });
};

const eventSendError = ({ event, err, name }) => {
  event.sender.send(EVENTS_SEND.WALLPAPER_FAILURE, {
    err,
    data: {
      image: {
        name
      }
    }
  });
};

const initIpcModule = () => {
  ipcMain.on(EVENTS_GET.WALLPAPER_SET, async (event, { uri, name }) => {
    const file = fileStorage.saveFileThroughWriteStream({
      fileName: name
    });

    eventSendIsPending({ event, name });

    request(uri)
      .on('end', async () => {
        const result = await wallpaper.set(file.path);

        if (result.err) {
          eventSendError({ err: result.err, event, name });
        } else {
          eventSendSuccess({ event, name });
        }
      })
      .on('error', err => {
        eventSendError({ err, event, name });
      })
      .pipe(file.writeStream);
  });
};

module.exports = { initIpcModule };
