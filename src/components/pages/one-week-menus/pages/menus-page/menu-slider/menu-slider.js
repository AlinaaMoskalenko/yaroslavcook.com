import React from 'react';
import PropTypes from 'prop-types';

import styles from './menu-slider.module.scss';
import Dots from './components/dots';

const MenuSlider = ({ children, amountSlice, ...rest }) => {
  let dots = [];

  if (amountSlice !== undefined) {
    for (let i = 0; i < amountSlice; i++) {
      dots.push( <Dots key={i} id={i} {...rest} /> );
    }
  }
  
  return (
    <div className={styles.menuSlider}>
      { children }
      <div className={styles.slideDots}>
        { dots }
      </div>
    </div>
  );
}

MenuSlider.propTypes = {
  children: PropTypes.node.isRequired,
  amountSlice: PropTypes.number
};

export default MenuSlider;