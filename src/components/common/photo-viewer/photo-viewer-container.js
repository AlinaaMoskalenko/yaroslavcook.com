import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PhotoViewer from './photo-viewer';

import classNames from 'classnames/bind';
import styles from './photo-viewer-container.module.scss';

class PhotoViewerContainer extends Component {
  state = {
    photo: this.props.selectedPhoto,
    prevPhoto: null
  };

  onTogglePhoto = (currentId, toggleId) => {
    const { photos } = this.props;
    this.setState({ prevPhoto: currentId });

    const idx = photos.findIndex(({ id }) => id === currentId);
    
    let newPhotoIdx = idx + toggleId;
    if (newPhotoIdx === -1) {
      newPhotoIdx = photos.length - 1;
    }

    if(newPhotoIdx === photos.length) {
      newPhotoIdx = 0;
    }

    const newPhoto = photos[newPhotoIdx];
    if (newPhotoIdx >= 0 && newPhotoIdx < photos.length) {
      this.setState({ photo: newPhoto });
    }
  }

  render() {
    const { onClose } = this.props;
    const { photo, prevPhoto } = this.state;

    const cx = classNames.bind(styles);
    const exitBtn = "fas fa-times " + cx('exitBtn');

    return (
      <div className={styles.viewerContainer}>
        <i className={exitBtn} onClick={onClose} />
        <PhotoViewer
          photo={photo}
          prevPhoto={prevPhoto}
          onTogglePhoto={this.onTogglePhoto} />
      </div>
    );
  }
}

PhotoViewerContainer.defaultProps = {
  onClose: () => {} 
};

PhotoViewerContainer.propTypes = {
  selectedPhoto: PropTypes.object.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string
  })).isRequired,
  onClose: PropTypes.func
};

export default PhotoViewerContainer;