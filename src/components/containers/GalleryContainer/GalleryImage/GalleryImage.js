import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';

import downloadIcon from './resourses/download.svg';
import heartIcon from './resourses/heart.svg';

import imageService from '../../../../services/imageService';

const ImageWrapper = styled(Box)`
  position: relative;
`;

const ImageDescription = styled(Flex)`
  bottom: 15px;
  height: 24px;
  position: absolute;
  padding: 0 15px;
  width: 100%;
`;

const ImageTitle = styled(Box)`
  color: #fff;
`;

const ImageActions = styled(Flex)`
  align-items: baseline;
`;

const ImageAction = styled(Box)`
  color: #fff;
  cursor: pointer;
  margin-left: 16px;
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

  handleLikeImage = () => {
    alert('Like image');
  };

  render() {
    const { image } = this.props;

    return (
      <ImageWrapper>
        <img width="100%" src={image.urls.small} />

        <ImageDescription justify="space-between">
          <ImageTitle>{image.description || 'Image title'}</ImageTitle>

          <ImageActions>
            <ImageAction onClick={this.handleSetImageAsWallpaper}>
              <img src={downloadIcon} />
            </ImageAction>

            <ImageAction onClick={this.handleLikeImage}>
              <img src={heartIcon} />
            </ImageAction>
          </ImageActions>
        </ImageDescription>
      </ImageWrapper>
    );
  }
}

export default GalleryImage;
