import Unsplash, { toJson } from 'unsplash-js';

const config = {
  APP_ID: 'bf227ca2fa8e63255a75023b9ed30235e5f2ca8256071b9f9fd28a71e7332a2c',
  APP_SECRET:
    '87d928b7473583c7b83e48b0456462fd84eb4b41a9d61bc366ff99369e2142b0',
  CALLBACK_URL: 'urn:ietf:wg:oauth:2.0:oob'
};

const unsplash = new Unsplash({
  applicationId: config.APP_ID,
  secret: config.APP_SECRET,
  callbackUrl: config.CALLBACK_URL
});

const unsplashService = {
  getPhotos: ({ name, amountPerPage, page }) =>
    new Promise((resolve, reject) => {
      unsplash.photos
        .listPhotos(page + 1, amountPerPage, 'latest')
        .then(toJson)
        .then(json => {
          resolve(json);
        })
        .catch(error => reject(error));
    })
};

export default unsplashService;
