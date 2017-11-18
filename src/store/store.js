import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from './models/user';
import galleries from './models/galleries';
import loader from './models/loader';
import modal from '../components/containers/Modal/store/modal';

const reducer = combineReducers({ user, galleries, loader, modal });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
