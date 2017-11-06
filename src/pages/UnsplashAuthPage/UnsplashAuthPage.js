import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import queryString from 'query-string';

import unsplashService from '../../services/usplashService';
import * as userActions from '../../store/models/user';

import Layout from '../../components/layouts/Layout/Layout';
import Navigation from '../../components/layouts/Navigation/Navigation';

class AuthPage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    authUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

  componentWillMount() {
    const searchQuery = queryString.parse(this.props.location.search);

    if (!searchQuery.code) {
      // redirect to 404
    }

    this.authUser(searchQuery.code);
  }

  authUser = async code => {
    const userAccessToken = await unsplashService.userAuthentication(code);

    this.props.authUser(userAccessToken);
  };

  render() {
    return (
      <Layout>
        <Navigation />

        {this.props.user.name ? this.props.user.name : 'Is loading'}
      </Layout>
    );
  }
}

export default connect(
  (state, props) => {
    return {
      user: state.user.unsplash
    };
  },
  dispatch => {
    return bindActionCreators(userActions, dispatch);
  }
)(AuthPage);
