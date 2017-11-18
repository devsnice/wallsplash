import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Box } from 'grid-styled';

import ExplorePage from './ExplorePage/ExplorePage';
import FavoritesPage from './FavoritesPage/FavoritesPage';
import UnsplashAuthPage from './UnsplashAuthPage/UnsplashAuthPage';

import Loader from '../components/units/Loader/Loader';
import Popup from '../components/units/Popup/Popup';

import Modal from '../components/containers/Modal/Modal';

import * as userActions from '../store/models/user';
import * as galleriesActions from '../store/models/galleries';

import storageService from '../services/storageService';
import unsplashService from '../services/usplashService';
import imageService from '../services/imageService';

class Application extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    userActions: PropTypes.object.isRequired,
    galleriesActions: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.userActions.authUser();
  }

  componentDidMount() {
    this.subcribeOnIpcActions();
  }

  subcribeOnIpcActions = () => {
    const { galleriesActions } = this.props;

    imageService.subscribeOnIpcEvents({
      onIsPending: msg => {
        galleriesActions.imageSetAsDesktopIsPending();
      },
      onSuccess: msg => {
        galleriesActions.imageSetAsDesktopIsSuccess();
      },
      onFailure: msg => {
        galleriesActions.imageSetAsDesktopIsFailure();
      }
    });
  };

  render() {
    const { isLoading } = this.props;

    return (
      <Box>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ExplorePage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="/auth" component={UnsplashAuthPage} />
          </Switch>
        </BrowserRouter>

        <Modal />
        <Loader isLoading={isLoading} />
      </Box>
    );
  }
}

export default connect(
  (state, props) => {
    return {
      user: state.user,
      isLoading: state.loader.isLoading
    };
  },
  dispatch => {
    return {
      userActions: bindActionCreators(userActions, dispatch),
      galleriesActions: bindActionCreators(galleriesActions, dispatch)
    };
  }
)(Application);
