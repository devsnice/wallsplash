import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Box } from "grid-styled";

import Navigation from "../../components/layouts/Navigation/Navigation";
import Layout from "../../components/layouts/Layout/Layout";

import * as userActions from "../../store/models/user";

class MainPage extends Component {
  static propTypes = {
    auth: PropTypes.func.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  };

  render() {
    return (
      <Layout>
        <Navigation />

        <Box>Main route of application</Box>

        <Box>User's name {this.props.user.name}</Box>

        <button
          onClick={() => {
            this.props.auth();
          }}
        >
          Click
        </button>
      </Layout>
    );
  }
}

export default connect(
  state => {
    return {
      user: state.user
    };
  },
  dispatch => {
    return bindActionCreators(userActions, dispatch);
  }
)(MainPage);
