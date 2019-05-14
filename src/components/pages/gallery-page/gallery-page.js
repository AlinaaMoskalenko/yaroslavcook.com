import React, { Component } from 'react';
import { images } from '../../service';
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

    const photosList = images.map(({ id, url, rotate = 0 }) => {
      let imgHeight = 310;
      let imgWidth = 310;
      const margin = 5;

      if (size < 330) {
        imgHeight = size - margin * 2;
        imgWidth = size - margin * 2;
      }

      const backgroundImage = {
        backgroundImage: `url(${url})`,
        transform: `rotate(${rotate}deg)`,
        width: `${imgWidth}px`,
        height: `${imgHeight}px`,
        margin: `${margin}px`
      };

      return <div key={id}
                  className={styles.img}
                  style={backgroundImage} />;
    })

    return (
      <div className={styles.galleryPage} ref={this.divRef}>
        { photosList }
      </div>
    );
  }
}