import React, { Component } from 'react';
import HTTPService from '../../common/service';
import Image from './components/image';
import styles from './gallery-page.module.scss';

export default class GalleryPage extends Component {
  state = {
    size: undefined,
    photos: [],
    loading: true
  };

  httpService = new HTTPService();
  divRef = React.createRef();

  componentDidMount() {
    this.setState({ size: this.divRef.current.offsetWidth });

    this.httpService.get(
      'photos/photos.json',
      (photos) => this.setState({ photos, loading: false }),
      (err) => console.log(err)
    );
  }

  onViewPhoto = () => {
    console.log('dfdfdf')
  }

  render() {
    const { size, photos, loading } = this.state;

    const photosList = photos.map((photo) => {
      const { id } = photo;
      return <Image
                key={id}
                deviceSize={size}
                image={photo}
                onViewPhoto={this.onViewPhoto} />;
    });

    return (
      <div className={styles.galleryPage} ref={this.divRef}>
        { loading ? <div>Loading...</div> : photosList }
      </div>
    );
  }
}