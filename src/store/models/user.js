import unsplashService from '../../services/usplashService';

// Initial state
const initialState = {
  name: ''
};

// Actions
const AUTH = 'USER_AUTH';

// Reducer
const userReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case AUTH:
      newState.name = action.payload.name;
      return newState;
    default:
      return state;
  }
};

// Action creators
export function auth() {
  return {
    type: AUTH,
    payload: {
      name: 'test'
    }
  };
}

export default userReducer;
