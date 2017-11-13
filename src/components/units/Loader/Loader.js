import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Flex, Box } from 'grid-styled';

class Loader extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired
  };

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return (
        <Flex p="20px 0" align="center">
          <Box>Is loading</Box>
        </Flex>
      );
    }

    return null;
  }
}

export default Loader;
