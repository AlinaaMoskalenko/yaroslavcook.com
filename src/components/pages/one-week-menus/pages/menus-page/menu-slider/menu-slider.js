import React from 'react';
import PropTypes from 'prop-types';

import styles from './menu-slider.module.scss';
import Dots from './components/dots';

const MenuSlider = ({ children, amountSlice, onArrowClick, ...rest }) => {
  let dots = [];

  if (amountSlice !== undefined) {
    for (let i = 0; i < amountSlice; i++) {
      dots.push( <Dots key={i} id={i} {...rest} /> );
    }
  }
  
  return (
    <>
      <div className={styles.menuSlider}>
        { amountSlice !== undefined && 
          <div className={styles.arrowToggles}>
            <i className="fas fa-chevron-left"
              onClick={() => onArrowClick(-1, amountSlice)} />
            <i className="fas fa-chevron-right"
              onClick={() => onArrowClick(1, amountSlice)} />
          </div>
        }
        
        { children }
      </div>

      <div className={styles.slideDots}>
        { dots }
      </div>
    </>
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