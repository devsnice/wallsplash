import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './MainPage/MainPage';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={MainPage} />
      </BrowserRouter>
    );
  }
}

export default Router;
