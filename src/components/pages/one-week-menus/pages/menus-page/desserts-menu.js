import React from 'react';
import menu from '../data/menus.json';

import PageContainer from '../../../../common/page-container';
import MenuSlider from './menu-slider';
import image from '../img/dessert.jpg';
import styles from './menu-slider/menu-slider.module.scss';

const DessertsMenu = () => {
  const items = menu['desserts'].map((item, idx) => {
    return <p key={idx}>{item}</p>;
  });

  return (
    <PageContainer image={image} type="MENU" position="CENTER">
      <MenuSlider>
        <div className={styles.menuContainer}>
          <h1 className={styles.mainTitle}>Desserts</h1>
          <div className={styles.simpleContent}>
            { items }
          </div>
        </div>
      </MenuSlider>
    </PageContainer>
  );
};

export default DessertsMenu;