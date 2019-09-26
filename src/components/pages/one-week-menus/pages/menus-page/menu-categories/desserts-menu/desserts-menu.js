import React from 'react';
import menu from '../../../data/menus.json';

import PageContainer from '../../../../../../common/page-container';
import MenuSlider from '../../menu-slider';
import Breadcrumbs from '../../../../../../common/breadcrumbs/breadcrumbs.js';
import image from '../../../img/dessert.jpg';

import styles from './desserts-menu.module.scss';

const DessertsMenu = () => {
  const links = [
    { url: '/one-week-menu', title: 'All menus' },
    { url: '#', title: 'Desserts', active: true }
  ];

  return (
    <>
      <Breadcrumbs items={links} />
      <PageContainer image={image} type="MENU" position="CENTER">
        <MenuSlider>
          <div className={styles.menuContainer}>
            <h1 className={styles.mainTitle}>Desserts</h1>
            <div className={styles.simpleContent}>
              { menu['desserts'].map((item, idx) => ( <p key={idx}>{item}</p> )) }
            </div>
          </div>
        </MenuSlider>
      </PageContainer>
    </>
  );
};

export default DessertsMenu;