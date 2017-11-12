import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Box, Flex } from 'grid-styled';

import GalleryImage from '../GalleryImage/GalleryImage';

class ListImages extends Component {
  static propTypes = {
    handlerLoadImages: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  };

  componentWillMount = () => {
    this.props.handlerLoadImages();
  };

  renderImages = () => {
    const { items } = this.props;

    return items.map(image => {
      return (
        <Box width={['96%', '48%', '31%']} mb="20px" key={image.id}>
          <GalleryImage image={image} />
        </Box>
      );
    });
  };

  render() {
    return (
      <Flex justify="space-between" align="flex-start" width="100%" wrap>
        {this.renderImages()}
      </Flex>
    );
  }
}

export default ListImages;
