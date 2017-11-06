import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Box } from 'grid-styled';

import Navigation from '../../components/layouts/Navigation/Navigation';
import Layout from '../../components/layouts/Layout/Layout';

import GalleryContainer from '../../components/containers/GalleryContainer/GalleryContainer';

import withUnsplashAuth from '../../components/hocs/withUnsplashAuth';

class FavoritesPage extends Component {
  static propTypes = {
    userProfile: PropTypes.object.isRequired
  };

  render() {
    const { username } = this.props.userProfile;

    return (
      <Layout>
        <Navigation />

        <Box>
          <GalleryContainer name="favorite" username={username} />
        </Box>
      </Layout>
    );
  }
}

export default withUnsplashAuth(FavoritesPage);
