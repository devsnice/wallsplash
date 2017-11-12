const EVENTS = {
  WALLPAPER_SET: 'WALLPAPER_SET'
};

const EVENTS_ON = {
  WALLPAPER_IS_PENDING: 'WALLPAPER_IS_PENDING',
  WALLPAPER_SUCCESS: 'WALLPAPER_SUCCESS',
  WALLPAPER_FAILURE: 'WALLPAPER_FAILURE'
};

const setImageAsWallpaper = ({ imageUrl, name }) => {
  if (window.require) {
    const { ipcRenderer } = window.require('electron');

    ipcRenderer.send(EVENTS.WALLPAPER_SET, {
      uri: imageUrl,
      name
    });
  } else {
    throw new Error("You couldn't set image on desktop throw web-site");
  }
};

const subscribeOnIpcEvents = () => {
  if (window.require) {
    const { ipcRenderer } = window.require('electron');

    ipcRenderer.on(EVENTS_ON.WALLPAPER_IS_PENDING, (event, msg) => {
      console.log('EVENTS_ON.WALLPAPER_IS_PENDING', msg);
    });

    ipcRenderer.on(EVENTS_ON.WALLPAPER_SUCCESS, (event, msg) => {
      console.log('WALLPAPER_SUCCESS', msg);
    });

    ipcRenderer.on(EVENTS_ON.WALLPAPER_FAILURE, (event, msg) => {
      console.log('WALLPAPER_FAILURE', msg);
    });
  } else {
    throw new Error("You couldn't subscribe throw web-site");
  }
};

export default { setImageAsWallpaper, subscribeOnIpcEvents };
