import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Box } from 'grid-styled';

import Popup from '../../units/Popup/Popup';
import * as modalActions from './store/modal';

import { getModalByName } from './modalConfig';

class Modal extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.object
    }).isRequired,
    actions: PropTypes.object.isRequired
  };

  static defaultProps = {
    modal: {
      name: 'null',
      data: {}
    }
  };

  getModalComponent = () => {
    const { modal } = this.props;

    return getModalByName(modal.name);
  };

  render() {
    const Component = this.getModalComponent();

    if (!Component) return null;

    const { modal, actions } = this.props;

    return (
      <Popup isOpen={modal.isOpen} handleClose={actions.close}>
        <Component data={modal.data} />
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
