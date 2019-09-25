import React from 'react';
import PropTypes from 'prop-types';
import menu from '../../data/menus.json';

import PageContainer from '../../../../../common/page-container';
import MenuSlider from '../menu-slider';
import image from '../../img/crew.jpg';

import classNames from 'classnames/bind';
import styles from '../menu-slider/menu-slider.module.scss';

const CrewMenu = ({ sliceId, prevId, onDotClick }) => {
  const cx = classNames.bind(styles);

  const slices = menu["crewMenu"].length;

  const items = menu['crewMenu'].map(({ lunch, dinner, pastry }, idx) => {
    const classes = cx(
      'menuContainer',
      'menuDay',
      { 'menuDayVisible': idx === sliceId,
        'animation': idx === sliceId && prevId !== null }
    );

    if (idx === slices - 1) {
      return (
        <div key={idx} className={classes}>
          <h1 className={styles.mainTitle}>Pastry</h1>
          <div className={styles.simpleContent}>
            { pastry.map((item, idx) => ( <p key={idx}>{ item }</p> )) }
          </div>
        </div>
      );
    }
    
    const [ lunchMenu, dinnerMenu ] = [ lunch, dinner ].map((item, idx) => {
      return <p key={idx}>{ item }</p>;
    });

    return (
      <div key={idx} className={classes}>
        <h1 className={styles.mainTitle}>Day {idx + 1}</h1>
        <div className={styles.content}>
          <div className={styles.menu}>
            <h1>Lunch</h1>
            { lunchMenu }
          </div>
          <div className={styles.menu}>
            <h1>Dinner</h1>
            { dinnerMenu }
          </div>
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

CrewMenu.defaultProps = {
  onDotClick: () => {}
};

CrewMenu.propTypes = {
  sliceId: PropTypes.number.isRequired,
  prevId: PropTypes.number,
  onDotClick: PropTypes.func
};

export default CrewMenu;
