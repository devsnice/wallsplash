import { combineReducers } from "redux";
import { createStore } from "redux";

import user from "./models/user";

const reducer = combineReducers({ user });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
