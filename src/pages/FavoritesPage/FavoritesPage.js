import React, { Component } from 'react';
import { Box } from 'grid-styled';

import Navigation from '../../components/layouts/Navigation/Navigation';
import Layout from '../../components/layouts/Layout/Layout';

import GalleryContainer from '../../components/containers/GalleryContainer/GalleryContainer';

import withUnsplashAuth from '../../hocs/withUnsplashAuth';

class FavoritesPage extends Component {
  render() {
    return (
      <Layout>
        <Navigation />

        <Box />
      </Layout>
    );
  }
}

export default withUnsplashAuth(FavoritesPage);
