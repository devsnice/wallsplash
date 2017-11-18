import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Box } from 'grid-styled';

import Overlay from '../Overlay/Overlay';

const PopupBody = styled(Box)`
  height: ${props => props.height};
  width: ${props => props.width};
  background: #fff;
  position: relative;
`;

const PopupClose = styled(Box)`
  position: absolute;
  height: 32px;
  width: 32px;
  top: 0;
  right: -32px;
  background: #fff;
  cursor: pointer;
`;

class Popup extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
  };

  close = () => {
    this.props.handleClose();
  };

  render() {
    const { isOpen } = this.props;

    if (!isOpen) return null;

    return (
      <Overlay>
        <PopupBody>
          <PopupClose onClick={this.close} />
          <Box>{this.props.children}</Box>
        </PopupBody>
      </Overlay>
    );
  }
}

export default Popup;
