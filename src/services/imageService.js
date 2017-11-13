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

const subscribeOnIpcEvents = ({ onIsPending, onSuccess, onFailure }) => {
  if (window.require) {
    const { ipcRenderer } = window.require('electron');

    ipcRenderer.on(EVENTS_ON.WALLPAPER_IS_PENDING, (event, msg) => {
      onIsPending(msg);
    });

    ipcRenderer.on(EVENTS_ON.WALLPAPER_SUCCESS, (event, msg) => {
      onSuccess(msg);
    });

    ipcRenderer.on(EVENTS_ON.WALLPAPER_FAILURE, (event, msg) => {
      onFailure(msg);
    });
  } else {
    throw new Error("You couldn't subscribe throw web-site");
  }
};

export default { setImageAsWallpaper, subscribeOnIpcEvents };
