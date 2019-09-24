import React from 'react';
import PropTypes from 'prop-types';

import styles from './menu-slider.module.scss';
import Dots from './components/dots';

const MenuSlider = ({ children, amountSlice, ...rest }) => {
  return (
    <div className={styles.menuSlider}>
      { children }
      <div className={styles.slideDots}>
        { amountSlice !== undefined &&
          <Dots {...rest}
          amountSlice={amountSlice} />}
      </div>
    </div>
  );
}

MenuSlider.propTypes = {
  children: PropTypes.node.isRequired,
  amountSlice: PropTypes.number
};

export default MenuSlider;