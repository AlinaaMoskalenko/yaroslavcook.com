import React from 'react';
import PropTypes from 'prop-types';
import menu from '../../data/menus.json';

import PageContainer from '../../../../../common/page-container';
import MenuSlider from '../menu-slider';
import image from '../../img/middle_eastern.jpg';

import classNames from 'classnames/bind';
import styles from '../menu-slider/menu-slider.module.scss';

const MiddleEasternMenu = ({ sliceId, prevId, onDotClick }) => {
  const cx = classNames.bind(styles);

  const slices = menu['middleEastern'].length;

  const items = menu['middleEastern'].map(({ lunch, dinner }, idx) => {
    const classes = cx(
      'menuContainer',
      'menuDay',
      { 'menuDayVisible': idx === sliceId,
        'animation': idx === sliceId && prevId !== null }
    );

    const [ lunchMenu, dinnerMenu ] =
      [ lunch, dinner ].map(({ courses }) => {
        const { firstCourse, mainCourse, sideDishes } = courses;

        const [ firstMenu, mainMenu, sideMenu ] = [ firstCourse, mainCourse, sideDishes ].map((item, idx) => {
          return <p key={idx}>{ item }</p>;
        });

        return(
          <>
            <div className={styles.firstCourse}>
              <h1>First course</h1>
              { firstMenu }
            </div>

            <div className={styles.mainCourse}>
              <h1>Main course</h1>
              { mainMenu }
            </div>

            <div className={styles.sideDishes}>
              <h1>Side dishes</h1>
              { sideMenu }
            </div>
          </>
        );
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

MiddleEasternMenu.defaultProps = {
  onDotClick: () => {}
};

MiddleEasternMenu.propTypes = {
  sliceId: PropTypes.number.isRequired,
  prevId: PropTypes.number,
  onDotClick: PropTypes.func
};

export default MiddleEasternMenu;