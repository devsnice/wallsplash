import unsplashService from '../../services/usplashService';

// Initial state
const initialState = {
  unsplash: {},
  isAuth: false
};

// Actions
const UNSPLASH_AUTH_SUCCESS = 'USER_UNSPLASH_AUTH_SUCCESS';

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UNSPLASH_AUTH_SUCCESS:
      return {
        ...state,
        unsplash: action.user,
        isAuth: true
      };

    default:
      return state;
  }
};

// Action creators
export function authSuccess({ user }) {
  return {
    type: UNSPLASH_AUTH_SUCCESS,
    user
  };
}

export default userReducer;
