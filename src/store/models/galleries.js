import unsplashService from '../../services/usplashService';
import storageService from '../../services/storageService';

import * as loaderActions from './loader';
import * as modalActions from '../../components/containers/Modal/store/modal';

import MODAL_CONSTANTS from '../../components/containers/Modal/modalConfig';

// Initial state
const initialState = {};

const getDefaultGallery = name => ({
  name,
  page: 0,
  items: [],
  amountPerPage: 15,
  isLoading: false,
  error: null
});

// Actions
const GALLERY_INIT = 'GALLERY_INIT';
const GALLERY_SET_IMAGES = 'GALLERY_SET_IMAGES';
const GALLERY_SET_IMAGES_FAILURE = 'GALLERY_SET_IMAGES_FAILURE';

// Reducer
const galleriesReducer = (state = initialState, action) => {
  const { gallery } = action;

  switch (action.type) {
    case GALLERY_INIT:
      return {
        ...state,
        [gallery.name]: getDefaultGallery(gallery.name)
      };
    case GALLERY_SET_IMAGES:
      return {
        ...state,
        [gallery.name]: {
          ...state[gallery.name],
          page: state[gallery.name].page + 1,
          items: [...state[gallery.name].items, ...gallery.newItems]
        }
      };
    case GALLERY_SET_IMAGES_FAILURE:
      return {
        ...state,
        [gallery.name]: {
          ...state[gallery.name],
          error: true
        }
      };
    default:
      return state;
  }
};

// Action creators
export const init = ({ name }) => {
  return {
    type: GALLERY_INIT,
    gallery: {
      name
    }
  };
};

export const setImages = ({ name, items }) => {
  return {
    type: GALLERY_SET_IMAGES,
    gallery: {
      name,
      newItems: items
    }
  };
};

export const setImagesFailure = ({ name }) => {
  return {
    type: GALLERY_SET_IMAGES_FAILURE
  };
};

export const loadImages = ({ name, username, gallery }) => async dispatch => {
  // get images from storage for saving api's requiests
  if (process.env.NODE_ENV === 'development') {
    const images = JSON.parse(storageService.get(name));

    if (images) {
      dispatch(
        setImages({
          name,
          items: images
        })
      );

      return;
    }
  }

  // get images from api
  try {
    const images = await unsplashService.getImages({
      name,
      amountPerPage: gallery.amountPerPage,
      page: gallery.page,
      username
    });

    storageService.set(name, JSON.stringify(images));

    dispatch(
      setImages({
        name,
        items: images
      })
    );
  } catch (error) {
    dispatch(
      setImagesFailure({
        name
      })
    );
  }
};

export const imageSetAsDesktopIsPending = () => dispatch => {
  dispatch(loaderActions.loaderOn());
};

export const imageSetAsDesktopIsSuccess = () => dispatch => {
  dispatch(loaderActions.loaderOff());
  dispatch(
    modalActions.open({
      name: MODAL_CONSTANTS.IMAGE_SET,
      data: {
        test: 'test'
      }
    })
  );
};

export const imageSetAsDesktopIsFailure = () => dispatch => {
  dispatch(loaderActions.loaderOff());
};

export default galleriesReducer;
