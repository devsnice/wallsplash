import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Box } from 'grid-styled';

import Popup from '../../units/Popup/Popup';
import * as modalActions from '../../../store/models/modal';

class Modal extends Component {
  static propTypes = {
    modal: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { modal, actions } = this.props;

    return (
      <Popup isOpen={modal.isOpen} handleClose={actions.close}>
        <Box>Default Modal</Box>
      </Popup>
    );
  }
}

export default connect(
  store => ({
    modal: store.modal
  }),
  dispatch => ({
    actions: bindActionCreators(modalActions, dispatch)
  })
)(Modal);
