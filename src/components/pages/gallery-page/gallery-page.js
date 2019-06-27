import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HTTPService from '../../common/service';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openViewer, setPhotosList, setCurrentPhoto } from '../../../reducers/actions';

import Image from './components/image';

import styles from './gallery-page.module.scss';

class GalleryPage extends Component {
  state = {
    loading: true
  };

  httpService = new HTTPService();

  componentDidMount() {
    this.httpService.get(
      'photos/photos.json',
      (photos) => {
        this.props.setPhotosList(photos);
        this.setState({ loading: false });
      },
      (err) => console.log(err)
    );
  }

  onViewPhoto = (currentPhoto) => {
    this.props.openViewer();
    this.props.setCurrentPhoto(currentPhoto);
  }

  render() {
    const { loading } = this.state;
    const { photosList } = this.props;

    const photos = photosList.map((photo) => {
      const { id } = photo;
      return <Image
                key={id}
                image={photo}
                onViewPhoto={this.onViewPhoto} />;
    });

    return (
      <div className={styles.galleryPage}>
        { loading ? <div>Loading...</div> : photos }
      </div>
    );
  }

  static defaultProps = {
    openViewer: () => {},
    setPhotosList: () => {},
    setCurrentPhoto: () => {}
  };

  static propTypes = {
    photosList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.any.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string
    })),
    openViewer: PropTypes.func,
    setPhotosList: PropTypes.func,
    setCurrentPhoto: PropTypes.func
  };
}

const mapStateToProps = ({ photosList }) => {
  return {
    photosList
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openViewer,
    setPhotosList,
    setCurrentPhoto
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);