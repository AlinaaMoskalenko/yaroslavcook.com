import React from 'react';
import PropTypes from 'prop-types';

import Dots from './components/dots';

import styles from './day-slider.module.scss';

const DaySlider = ({ children, amountSlice, ...rest }) => {
  let dots = [];
  for (let i = 0; i < amountSlice; i++) {
    dots.push( <Dots key={i} id={i} {...rest} /> );
  }
  
  return (
    <div className={styles.daySlider}>
      { children }
      { amountSlice !== undefined &&
        <div className={styles.slideDots}>{ dots } </div> }
    </div>
  );
}

DaySlider.propTypes = {
  children: PropTypes.node.isRequired,
  amountSlice: PropTypes.number
};

export default DaySlider;