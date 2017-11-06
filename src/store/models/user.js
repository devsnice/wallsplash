import storageService from '../../services/storageService';
import unsplashService from '../../services/usplashService';

// Initial state
const initialState = {
  unsplash: {},
  isAuth: false,
  isPending: true
};

// Actions
const UNSPLASH_AUTH_PENDING = 'USER_UNSPLASH_AUTH_PENDING';
const UNSPLASH_AUTH_FAILURE = 'USER_UNSPLASH_AUTH_FAILURE';
const UNSPLASH_AUTH_SUCCESS = 'USER_UNSPLASH_AUTH_SUCCESS';

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UNSPLASH_AUTH_PENDING:
      return {
        ...state,
        isPending: true
      };
    case UNSPLASH_AUTH_FAILURE:
      return {
        ...state,
        isPending: false
      };
    case UNSPLASH_AUTH_SUCCESS:
      return {
        ...state,
        unsplash: action.user,
        isAuth: true,
        isPending: false
      };

    default:
      return state;
  }
};

// Action creators

export function authPending() {
  return {
    type: UNSPLASH_AUTH_PENDING
  };
}

export function authFailure() {
  return {
    type: UNSPLASH_AUTH_FAILURE
  };
}

export function authSuccess({ user }) {
  return {
    type: UNSPLASH_AUTH_SUCCESS,
    user
  };
}

export const authUser = newAccessToken => async dispatch => {
  const userAccessToken = newAccessToken || storageService.get('accessToken');

  dispatch(authPending());

  if (newAccessToken) {
    storageService.set('accessToken', newAccessToken);
  }

  if (userAccessToken) {
    await unsplashService.setBearerToken(userAccessToken);

    const cacheUser = storageService.get('user');
    let user = {};

    if (!cacheUser) {
      user = await unsplashService.getCurrentUser();

      storageService.set('user', JSON.stringify(user));
    } else {
      user = JSON.parse(cacheUser);
    }

    dispatch(authSuccess({ user }));
  } else {
    dispatch(authFailure());
  }
};

export default userReducer;
