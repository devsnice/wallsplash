import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Box } from 'grid-styled';

import unsplashService from '../../services/usplashService';

const withUnsplashAuth = WrappedPage => {
  class ComponentWithUnsplashAuth extends Component {
    static propTypes = {
      isAuth: PropTypes.bool.isRequired,
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
      return <WrappedPage />;
    }
  }

  return connect((state, props) => {
    return {
      isAuth: state.user.isAuth
    };
  })(ComponentWithUnsplashAuth);
};

export default withUnsplashAuth;
