/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/
import Unsplash, { toJson } from 'unsplash-js';

const config = {
  APP_ID: 'bf227ca2fa8e63255a75023b9ed30235e5f2ca8256071b9f9fd28a71e7332a2c',
  APP_SECRET:
    '87d928b7473583c7b83e48b0456462fd84eb4b41a9d61bc366ff99369e2142b0',
  CALLBACK_URL: 'http://localhost:3000/auth'
};

const unsplash = new Unsplash({
  applicationId: config.APP_ID,
  secret: config.APP_SECRET,
  callbackUrl: config.CALLBACK_URL
});

const mainGallery = {
  getImages: async ({ amountPerPage, page }) => {
    const images = await unsplash.photos
      .listPhotos(page + 1, amountPerPage, 'latest')
      .then(toJson);

    return images;
  }
};

const favoriteGallery = {
  getImages: async ({ amountPerPage, page }) => {
    const images = await unsplash.photos
      .listPhotos(page + 1, amountPerPage, 'latest')
      .then(toJson);

    return images;
  }
};

const unsplashService = {
  auth: async () => {
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      'public',
      'read_user',
      'write_user',
      'read_photos',
      'write_photos',
      'write_likes',
      'read_collections',
      'write_collections'
    ]);

    location.assign(authenticationUrl);
  },
  userAuthentication: async code => {
    const accessToken = await unsplash.auth
      .userAuthentication(code)
      .then(toJson)
      .then(json => json.access_token)
      .then(token => {
        return token;
      });

    unsplash.auth.setBearerToken(accessToken);

    return accessToken;
  },
  getCurrentUser: async () => {
    const user = await unsplash.currentUser.profile().then(toJson);

    return user;
  },
  getImages: async ({ name, amountPerPage, page }) => {
    let images = null;

    switch (name) {
      case 'main':
        images = await mainGallery.getImages({ amountPerPage, page });
        break;
      case 'favorite':
        images = await favoriteGallery.getImages({ amountPerPage, page });
        break;
      default:
        throw new Error(
          `There isn't service for working with gallery's type ${name}`
        );
    }

    return images;
  }
};

export default unsplashService;
