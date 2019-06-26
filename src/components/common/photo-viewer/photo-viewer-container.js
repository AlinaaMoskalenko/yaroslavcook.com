import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoViewer from './photo-viewer';

class PhotoViewerContainer extends Component {
  state = {
    selectedPhoto: this.props.selectedPhoto,
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
      this.setState({ selectedPhoto: newPhoto });
    }
  }

  render() {
    const { selectedPhoto } = this.state;

    return <PhotoViewer photo={selectedPhoto} onTogglePhoto={this.onTogglePhoto} />;
  }
}

PhotoViewerContainer.propTypes = {
  selectedPhoto: PropTypes.object
};

export default PhotoViewerContainer;