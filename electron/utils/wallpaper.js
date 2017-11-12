const wallpaper = require('wallpaper');

const set = async imageUrl => {
  try {
    await wallpaper.set(imageUrl);

    return { err: null };
  } catch (err) {
    return { err: 'Problem with setting a new image' };
  }
};

module.exports = {
  set
};
