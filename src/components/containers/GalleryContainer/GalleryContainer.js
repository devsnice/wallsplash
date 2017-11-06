import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Box } from 'grid-styled';
import ListImages from './ListImages/ListImages';

import * as galleryActions from '../../../store/models/galleries';

import unsplashService from '../../../services/usplashService';

class GalleryContainer extends Component {
  static propTypes = {
    name: PropTypes.oneOf(['main', 'favorite', 'sets']).isRequired,
    gallery: PropTypes.shape({
      items: PropTypes.array,
      page: PropTypes.number,
      amountPerPage: PropTypes.number,
      isLoading: PropTypes.bool
    }).isRequired,
    username: PropTypes.string.isRequired
  };

  static defaultProps = {
    gallery: {
      items: []
    }
  };

  componentWillMount() {
    this.props.init({ name: this.props.name });
  }

  handlerLoadImages = async () => {
    const { name, gallery, setImages, username } = this.props;

    const images = await unsplashService.getImages({
      name,
      amountPerPage: gallery.amountPerPage,
      page: gallery.page,
      username
    });

    setImages({
      name,
      items: images
    });
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
