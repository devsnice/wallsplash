import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Application from './pages/application';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);
