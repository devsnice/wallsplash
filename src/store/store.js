import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from './models/user';
import galleries from './models/galleries';

const reducer = combineReducers({ user, galleries });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
