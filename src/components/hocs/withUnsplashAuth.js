import React, { Component } from 'react';
import PropTypes from 'prop-types';

import unsplashService from '../../services/usplashService';

const withUnsplashAuth = WrappedPage => {
  return class ComponentWithUnsplashAuth extends Component {
    const propTypes = {
      isAuth: PropTypes.bool.isRequired,
      match: PropTypes.shape({
        url: PropTypes.string
      })
    }

    componentWillMount() {
      const { match, isAuth } = this.props;

      if(isAuth) return;
      
      unsplashService.auth({
        redirectUrl: match.url
      });
    }

    render() {
      return <WrappedPage />;
    }
  };
};

export default withUnsplashAuth;


export default connect(
  (state, props) => {
    return {
      isAuth: state.user.isAuth
    };
  }
)(AuthPage);

