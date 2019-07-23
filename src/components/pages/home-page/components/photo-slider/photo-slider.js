import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './img/1.jpg';
import img2 from './img/11.jpg';
import img3 from './img/2.jpg';
import img4 from './img/3.jpg';
import img5 from './img/4.jpg';
import img6 from './img/6.jpg';

import styles from './photo-slider.module.scss';

const photo_arr = [ 
  { id: 'img1', url: img1 },
  { id: 'img2', url: img2 },
  { id: 'img3', url: img3 },
  { id: 'img4', url: img4 },
  { id: 'img5', url: img5 },
  { id: 'img6', url: img6 }
];

const PhotoSlider = () => {
  const photos = photo_arr.map(({ id, url }) => {
    return (
      <div key={id} className={styles.photo}>
        <img src={url} alt="meal" />
      </div>
    );
  });

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.photoSlider}>
        <i className="fas fa-chevron-left" />
        <div className={styles.container}>
          <div className={styles.slider}>
            { photos }
          </div>
        </div>
        <i className="fas fa-chevron-right" />
      </div>

      <Link to="/gallery" className={styles.btn}>
        View more
      </Link>
    </div>
  );
};

export default PhotoSlider;