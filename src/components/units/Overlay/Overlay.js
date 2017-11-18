import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Portal } from 'react-portal';
import { Flex } from 'grid-styled';

import { preventBodyScroll } from '../../cssHelpers';

const Wrapper = styled(Flex).attrs({
  align: 'center',
  justify: 'center'
})`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  ${preventBodyScroll};
`;

class Overlay extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  render() {
    return (
      <Portal>
        <Wrapper>{this.props.children}</Wrapper>
      </Portal>
    );
  }
}

export default Overlay;
