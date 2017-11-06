import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Box } from 'grid-styled';

import unsplashService from '../../services/usplashService';

const withUnsplashAuth = WrappedPage => {
  class ComponentWithUnsplashAuth extends Component {
    static propTypes = {
      isAuth: PropTypes.bool.isRequired,
      userProfile: PropTypes.object.isRequired,
      match: PropTypes.shape({
        url: PropTypes.string
      })
    };

    componentWillMount() {
      const { match, isAuth } = this.props;

      if (isAuth) return;

      unsplashService.auth({
        redirectUrl: match.url
      });
    }

    render() {
      const { userProfile, isAuth } = this.props;

      if (!isAuth) return <Box>400</Box>;

      return <WrappedPage userProfile={userProfile} />;
    }
  }

  return connect((state, props) => {
    return {
      isAuth: state.user.isAuth,
      userProfile: state.user.unsplash
    };
  })(ComponentWithUnsplashAuth);
};

export default withUnsplashAuth;
