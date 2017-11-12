import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';

import imageService from '../../../../services/imageService';

const ImageWrapper = styled(Box)`position: relative;`;
const ImageActions = styled(Flex)`
  bottom: 0;
  position: absolute;
  height: 32px;
  width: 100%;
  padding: 0 10px;
`;
const ImageAction = styled(Box)`
  color: #fff;
  cursor: pointer;
`;

class GalleryImage extends Component {
  static propTypes = {
    image: PropTypes.shape({
      urls: PropTypes.shape({
        full: PropTypes.string,
        raw: PropTypes.string,
        small: PropTypes.string
      }).isRequired,
      links: PropTypes.shape({
        download: PropTypes.string
      }),
      id: PropTypes.string.isRequired
    }).isRequired
  };

  handleSetImageAsWallpaper = () => {
    const { image: { urls: { full }, id } } = this.props;

    imageService.setImageAsWallpaper({
      imageUrl: full,
      name: id
    });
  };

  render() {
    const { image } = this.props;

    return (
      <ImageWrapper>
        <img width="100%" src={image.urls.small} />
        <ImageActions justify="flex-end">
          <ImageAction onClick={this.handleSetImageAsWallpaper}>
            Install
          </ImageAction>
        </ImageActions>
      </ImageWrapper>
    );
  }
}

export default GalleryImage;
