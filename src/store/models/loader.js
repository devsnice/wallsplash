// Initial state
const initialState = {
  isLoading: false
};

// Actions
const LOADER_ON = 'LOADER_ON';
const LOADER_OFF = 'LOADER_OFF';

// Reducer
const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return {
        isLoading: true
      };
    case LOADER_OFF:
      return {
        isLoading: false
      };
    default:
      return state;
  }
};

// Action creators

export function loaderOn() {
  return {
    type: LOADER_ON,
    payload: {}
  };
}

export function loaderOff() {
  return {
    type: LOADER_OFF,
    payload: {}
  };
}

export default loaderReducer;
