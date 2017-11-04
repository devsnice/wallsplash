import React, { Component } from 'react';

import { Box, Flex } from 'grid-styled';

import Navigation from '../../components/layouts/Navigation/Navigation';
import Layout from '../../components/layouts/Layout/Layout';

import GalleryContainer from '../../components/containers/GalleryContainer/GalleryContainer';

class MainPage extends Component {
  render() {
    return (
      <Flex justify="center">
        <Layout>
          <Navigation />

          <Box>
            <GalleryContainer name="main" />
          </Box>
        </Layout>
      </Flex>
    );
  }
}

export default MainPage;
