import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Box } from 'grid-styled';

class ImageSetModal extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    return (
      <Box width="400px" height="200px">
        Information about next steps in the application
      </Box>
    );
  }
}

export default ImageSetModal;
