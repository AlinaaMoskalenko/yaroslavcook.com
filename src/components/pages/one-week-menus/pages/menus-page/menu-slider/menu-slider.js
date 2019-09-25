import React from 'react';
import PropTypes from 'prop-types';

import styles from './menu-slider.module.scss';
import Dots from './components/dots';

const MenuSlider = ({ children, amountSlice, onArrowClick, ...rest }) => {
  return (
    <div className={styles.menuSlider}>
      { amountSlice !== undefined && 
        <i className="fas fa-chevron-left"
          onClick={() => onArrowClick(-1, amountSlice)} />}

      { children }

      { amountSlice !== undefined &&
        <i className="fas fa-chevron-right"
          onClick={() => onArrowClick(1, amountSlice)} />}
      <div className={styles.slideDots}>
        { amountSlice !== undefined &&
          <Dots {...rest}
            amountSlice={amountSlice} />}
      </div>
    </div>
  );
}

MenuSlider.defaultProps = {
  onArrowClick: () => {}
};

MenuSlider.propTypes = {
  children: PropTypes.node.isRequired,
  amountSlice: PropTypes.number,
  onArrowClick: PropTypes.func
};

export default MenuSlider;