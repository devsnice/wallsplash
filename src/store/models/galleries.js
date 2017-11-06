import unsplashService from '../../services/usplashService';

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
const INIT = 'GALLERY_INIT';
const SET_IMAGES = 'GALLERY_SET_IMAGES';

// Reducer
const galleriesReducer = (state = initialState, action) => {
  const { gallery } = action;

  switch (action.type) {
    case INIT:
      return {
        ...state,
        [gallery.name]: getDefaultGallery(gallery.name)
      };
    case SET_IMAGES:
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

export function init({ name }) {
  return {
    type: INIT,
    gallery: {
      name
    }
  };
}

export function setImages({ name, items }) {
  return {
    type: SET_IMAGES,
    gallery: {
      name,
      newItems: items
    }
  };
}

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

export default galleriesReducer;
