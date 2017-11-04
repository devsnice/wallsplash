// Initial state
const initialState = {
  name: ''
};

// Actions
const AUTH = 'user/auth';

// Reducer
const userReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case AUTH:
      newState.name = 'nonename';
      return newState;
    default:
      return state;
  }
};

// Action creators
export function auth() {
  return { type: AUTH };
}

export default userReducer;
