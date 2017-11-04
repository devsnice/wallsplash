// Initial state
const initialState = {};

const getDefaultGallery = name => ({
  name,
  page: 0,
  items: [],
  amountPerPage: 15,
  isLoading: false
});

// Actions
const INIT = 'GALLERY_INIT';
const SET_IMAGES = 'GALLERY_SET_IMAGES';

// Reducer
const galleriesReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  const { gallery } = action;

  switch (action.type) {
    case INIT:
      newState[gallery.name] = getDefaultGallery(gallery.name);
      return newState;
    case SET_IMAGES:
      newState[gallery.name] = Object.assign(
        {
          page: newState[gallery.name].page + 1,
          items: [...newState[gallery.name].items, ...gallery.newItems]
        },
        newState[gallery.name]
      );
      return newState;
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

export default galleriesReducer;
