import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import FavoritesPage from './FavoritesPage/FavoritesPage';
import UnsplashAuthPage from './UnsplashAuthPage/UnsplashAuthPage';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/auth" component={UnsplashAuthPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
