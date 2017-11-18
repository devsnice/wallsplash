import unsplashService from '../../services/usplashService';

import * as loaderActions from './loader';
import * as modalActions from './modal';

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

export const loadImages = ({ name, username, gallery }) => async dispatch => {
  // TODO: try/catch vs {error: '', data: {}}
  try {
    const images = await unsplashService.getImages({
      name,
      amountPerPage: gallery.amountPerPage,
      page: gallery.page,
      username
    });

    dispatch(
      setImages({
        name,
        items: images
      })
    );
  } catch (error) {
    // TODO: failure
  }
};

export const imageSetAsDesktopIsPending = () => dispatch => {
  dispatch(loaderActions.loaderOn());
};

export const imageSetAsDesktopIsSuccess = () => dispatch => {
  // some logic
  dispatch(modalActions.open({}));
  dispatch(loaderActions.loaderOff());
};

export const imageSetAsDesktopIsFailure = () => dispatch => {
  // some logic
  dispatch(loaderActions.loaderOff());
};

export default galleriesReducer;
