import React from 'react';
import PropTypes from 'prop-types';
import menu from '../../data/menus.json';

import PageContainer from '../../../../../common/page-container';
import MenuSlider from '../menu-slider';
import image from '../../img/french_dinner.jpg';

import classNames from 'classnames/bind';
import styles from '../menu-slider/menu-slider.module.scss';

const FrenchCharterMenu = ({ sliceId, prevId, onDotClick }) => {
  const cx = classNames.bind(styles);

  const slices = menu['frenchCharter'].length;

  const items = menu['frenchCharter'].map(({ dinner }, idx) => {
    const classes = cx(
      'menuContainer',
      'menuDay',
      { 'menuDayVisible': idx === sliceId,
        'animation': idx === sliceId && prevId !== null }
    );

    return (
      <div key={idx} className={classes}>
        <h1 className={styles.mainTitle}>Day {idx + 1}</h1>
        <div className={styles.content}>
            { dinner.map((item, idx) => ( <p key={idx}>{ item }</p> )) }
        </div>
      </div>
    );
  });

  return (
    <PageContainer image={image} type="MENU" position="CENTER">
      <MenuSlider
        sliceId={sliceId}
        amountSlice={slices}
        onDotClick={onDotClick}>
          { items }
      </MenuSlider>
    </PageContainer>
  );
};

FrenchCharterMenu.defaultProps = {
  onDotClick: () => {}
};

FrenchCharterMenu.propTypes = {
  sliceId: PropTypes.number.isRequired,
  prevId: PropTypes.number,
  onDotClick: PropTypes.func
};

export default FrenchCharterMenu;