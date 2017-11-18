import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Flex, Box } from 'grid-styled';
import Overlay from '../Overlay/Overlay';

class Loader extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired
  };

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return (
        <Overlay>
          <Flex p="20px 0" align="center">
            <Box>Is loading</Box>
          </Flex>
        </Overlay>
      );
    }

    return null;
  }
}

export default Loader;
