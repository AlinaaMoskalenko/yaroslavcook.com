import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HTTPService from '../../../../common/service';
import Slider from './components/slider';

import styles from './photo-slider-container.module.scss';

export default class PhotoSliderContainer extends Component {
  
  httpService = new HTTPService();

  state = {
    photos: []
  };

  componentDidMount() {
    this.httpService.get(
      'photos/photos.json',
      (photos) => {
        const resp = photos.slice(0, photos.length / 4);
        this.setState({ photos: resp });
      },
      (err) => console.log(err)
    );
  }

  render () {
    const { photos } = this.state;
    // const { photosList = photo_arr } = props;

    return (
      <div className={styles.sliderContainer}>
        <div className={styles.photoSlider}>
          {/* нужно подумать над загрузкой фото в слайдер
          - например сделать общий лоадер на странице, пока грузятся фото или вынести часть фото в другой json 
          - или получить из пропсов */}
          { photos.length !==0 && <Slider photosList={photos} /> }
        </div>
  
        <Link to="/gallery" className={styles.btn}>
          View more
        </Link>
      </div>
    );
  }
}