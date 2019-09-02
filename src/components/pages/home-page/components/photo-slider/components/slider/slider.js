import React from 'react';
import PropTypes from 'prop-types';
import withTransition from '../hoc';

import classNames from 'classnames/bind';
import styles from './slider.module.scss';

const Slider = ({ photosList, style, animation, toggleSlider, onTransitionEnd }) => {
  const cx = classNames.bind(styles);
  const classes = cx('slider', animation);

  const photos = photosList.map(({ id, url }) => {
    return (
      <div key={id} className={styles.photo} >
        <img src={url} alt="meal" />
      </div>
    );
  });

  return (
    <>
      <i className="fas fa-chevron-left" onClick={() => toggleSlider(-1)} />
      <div className={styles.container}>
        <div className={classes} style={style} onTransitionEnd={onTransitionEnd}>
          { photos }
        </div>
      </div>
      <i className="fas fa-chevron-right" onClick={() => toggleSlider(1)} />
    </>
  );
};

Slider.propTypes = {
  photosList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired
  }))
};

export default withTransition(Slider);