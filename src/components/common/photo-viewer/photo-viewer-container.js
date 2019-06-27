import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PhotoViewer from './photo-viewer';

import styles from './photo-viewer-container.module.scss';

class PhotoViewerContainer extends Component {
  state = {
    photo: this.props.selectedPhoto
  };

  onTogglePhoto = (currentId, toggleId) => {
    const { photos } = this.props;

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
    const { photo } = this.state;

    const exitButton = (
      <svg viewBox="0 0 180 180" className={styles.exitBtn} onClick={onClose}>
        <path d="M5 5 L175 175 M175 5 L5 175" />
      </svg>
    );

    return (
      <div className={styles.viewerContainer}>
        { exitButton }
        <PhotoViewer photo={photo} onTogglePhoto={this.onTogglePhoto} />
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