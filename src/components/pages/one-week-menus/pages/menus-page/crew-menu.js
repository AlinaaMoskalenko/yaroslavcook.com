import React from 'react';
import menu from '../data/menus.json';

import PageContainer from '../../../../common/page-container';
import image from '../img/crew.jpg';
import MenuSlider from './menu-slider';

const CrewMenu = () => {
  return (
    <PageContainer image={image} type="MENU" position="CENTER">
      <MenuSlider menu={menu['crewMenu']} />
    </PageContainer>
  );
};

export default CrewMenu;