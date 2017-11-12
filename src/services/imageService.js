const EVENTS = {
  WALLPAPER_SET: 'WALLPAPER_SET'
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

export default { setImageAsWallpaper };
