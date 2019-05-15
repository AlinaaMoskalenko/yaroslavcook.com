import React, { Component } from 'react';
import { images } from '../../service';
import Image from './components/image';
import styles from './gallery-page.module.scss';

export default class GalleryPage extends Component {
  state = {
    size: undefined
  };

  divRef = React.createRef();

  componentDidMount() {
    this.setState({ size: this.divRef.current.offsetWidth });
  }

  render() {
    const { size } = this.state;

    const photosList = images.map((image) => {
      const { id } = image;
      return <Image key={id} deviceSize={size} image={image} />;
    });

    return (
      <div className={styles.galleryPage} ref={this.divRef}>
        { photosList }
      </div>
    );
  }
}