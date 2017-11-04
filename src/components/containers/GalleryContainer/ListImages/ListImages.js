import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Box } from 'grid-styled';

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

    return items.map(item => {
      return <Box>{item.urls.thumb}</Box>;
    });
  };

  render() {
    return <Box>{this.renderImages()}</Box>;
  }
}

export default ListImages;
