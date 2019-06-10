import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { images } from '../../service';
import PhotoViewer from './photo-viewer';

class PhotoViewerContainer extends Component {
  state = {
    currentImage: this.props.image
  };

  onToggleImage = (currentId, toggleId) => {
    const idx = images.findIndex(({ id }) => id === currentId);
    
    let newImageIdx = idx + toggleId;
    if (newImageIdx === -1) {
      newImageIdx = images.length - 1;
    }

    if(newImageIdx === images.length) {
      newImageIdx = 0;
    }

    const newImage = images[newImageIdx];
    if (newImageIdx >= 0 && newImageIdx < images.length) {
      this.setState({ currentImage: newImage });
    }
  }

  render() {
    const { currentImage } = this.state;
    return <PhotoViewer image={currentImage} onToggleImage={this.onToggleImage} />;
  }
}

PhotoViewerContainer.propTypes = {
  image: PropTypes.object
};

export default PhotoViewerContainer;