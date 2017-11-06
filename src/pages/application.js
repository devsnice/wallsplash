import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Box } from 'grid-styled';

import MainPage from './MainPage/MainPage';
import FavoritesPage from './FavoritesPage/FavoritesPage';
import UnsplashAuthPage from './UnsplashAuthPage/UnsplashAuthPage';

import * as userActions from '../store/models/user';

import storageService from '../services/storageService';
import unsplashService from '../services/usplashService';

class Application extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    authUser: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.authUser();
  }

  render() {
    const { user } = this.props;

    if (!user.isPending) {
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

    return <Box>Is pending</Box>;
  }
}

export default connect(
  (state, props) => {
    return {
      user: state.user
    };
  },
  dispatch => {
    return bindActionCreators(userActions, dispatch);
  }
)(Application);
