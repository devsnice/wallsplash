import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Box } from 'grid-styled';
import ListImages from './ListImages/ListImages';

import * as galleryActions from '../../../store/models/galleries';

class GalleryContainer extends Component {
  static propTypes = {
    name: PropTypes.oneOf(['main', 'favorite', 'sets']).isRequired,
    gallery: PropTypes.shape({
      items: PropTypes.array,
      page: PropTypes.number,
      amountPerPage: PropTypes.number,
      isLoading: PropTypes.bool
    }).isRequired,
    username: PropTypes.string,
    init: PropTypes.func.isRequired,
    loadImages: PropTypes.func.isRequired
  };

  static defaultProps = {
    gallery: {
      items: []
    },
    username: null
  };

  componentWillMount() {
    this.props.init({ name: this.props.name });
  }

  handlerLoadImages = async () => {
    const { name, gallery, username } = this.props;

    this.props.loadImages({ name, username, gallery });
  };

  render() {
    const { gallery, name } = this.props;

    return (
      <ListImages
        name={name}
        items={gallery.items}
        handlerLoadImages={this.handlerLoadImages}
      />
    );
  }
}

export default connect(
  (state, props) => {
    return {
      gallery: state.galleries[props.name]
    };
  },
  dispatch => {
    return bindActionCreators(galleryActions, dispatch);
  }
)(GalleryContainer);
