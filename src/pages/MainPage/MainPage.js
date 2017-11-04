import React, { Component } from 'react';

import { Box } from 'grid-styled';

import Navigation from '../../components/layouts/Navigation/Navigation';
import Layout from '../../components/layouts/Layout/Layout';

import GalleryContainer from '../../components/containers/GalleryContainer/GalleryContainer';

import * as userActions from '../../store/models/user';

class MainPage extends Component {
  render() {
    return (
      <Layout>
        <Navigation />

        <Box>
          <GalleryContainer name="main" />
        </Box>
      </Layout>
    );
  }
}

export default MainPage;
