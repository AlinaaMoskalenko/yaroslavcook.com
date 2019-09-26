import React from 'react';
import PropTypes from 'prop-types';
import menu from '../../../data/menus.json';

import PageContainer from '../../../../../../common/page-container';
import MenuSlider from '../../menu-slider';
import Breadcrumbs from '../../../../../../common/breadcrumbs/breadcrumbs.js';
import image from '../../../img/middle_eastern.jpg';

import classNames from 'classnames/bind';
import styles from './middle-eastern-menu.module.scss';

const MiddleEasternMenu = ({ sliceId, prevId, ...rest }) => {
  const cx = classNames.bind(styles);

  const links = [
    { url: '/one-week-menu', title: 'All menus' },
    { url: '#', title: 'Middle Eastern Menu', active: true }
  ];

  const slices = menu['middleEastern'].length;

  const items = menu['middleEastern'].map(({ lunch, dinner }, idx) => {
    const classes = cx(
      'menuContainer',
      'menuDay',
      { 'menuDayVisible': idx === sliceId,
        'animation': idx === sliceId && prevId !== null }
    );

    const menuCreator = ({ courses }) => {
      const { firstCourse, mainCourse, sideDishes } = courses;
  
      return (
        <>
          <div className={styles.course}>
            <h1>First course</h1>
            { firstCourse.map((item, idx) => (<p key={idx}>{ item }</p>)) }
          </div>
  
          <div className={styles.course}>
            <h1>Main course</h1>
            { mainCourse.map((item, idx) => (<p key={idx}>{ item }</p>)) }
          </div>
  
          <div className={styles.course}>
            <h1>Side dishes</h1>
            { sideDishes.map((item, idx) => (<p key={idx}>{ item }</p>)) }
          </div>
        </>
      );
    };

    return (
      <div key={idx} className={classes}>
        <h1 className={styles.mainTitle}>Day {idx + 1}</h1>
        <div className={styles.content}>
          <div className={styles.menu}>
            <h1>Lunch</h1>
            { menuCreator(lunch) }
          </div>
          <div className={styles.menu}>
            <h1>Dinner</h1>
            { menuCreator(dinner) }
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Breadcrumbs items={links} />
      <PageContainer image={image} type="MENU" position="CENTER">
        <MenuSlider {...rest}
          sliceId={sliceId}
          amountSlice={slices}>
            { items }
        </MenuSlider>
      </PageContainer>
    </>
  );
};

MiddleEasternMenu.propTypes = {
  sliceId: PropTypes.number.isRequired,
  prevId: PropTypes.number
};

export default MiddleEasternMenu;