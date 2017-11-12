const wallpaperIpcModule = require('./wallpaperIpcModule.js');

const initIpcModules = () => {
  wallpaperIpcModule.initIpcModule();
};

module.exports = {
  initIpcModules
};
