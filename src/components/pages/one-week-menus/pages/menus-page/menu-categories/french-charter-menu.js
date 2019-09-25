import React from 'react';
import PropTypes from 'prop-types';
import menu from '../../data/menus.json';

import PageContainer from '../../../../../common/page-container';
import MenuSlider from '../menu-slider';
import Breadcrumbs from '../../../../../common/breadcrumbs/breadcrumbs.js';
import image from '../../img/french_dinner.jpg';

import classNames from 'classnames/bind';
import styles from '../menu-slider/menu-slider.module.scss';

const FrenchCharterMenu = ({ sliceId, prevId, ...rest }) => {
  const cx = classNames.bind(styles);

  const links = [
    { url: '/one-week-menu', title: 'All menus' },
    { url: '#', title: 'French charter dinner menu', active: true }
  ];

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

FrenchCharterMenu.propTypes = {
  sliceId: PropTypes.number.isRequired,
  prevId: PropTypes.number
};

export default FrenchCharterMenu;