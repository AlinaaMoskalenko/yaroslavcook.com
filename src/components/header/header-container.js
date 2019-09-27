import React from 'react';
import Header from './header';
import NavMenu from '../nav-menu';

const HeaderContainer = ({ isOpened, ...rest }) => {
  return (
    <>
      <Header isOpened={isOpened} />
      <NavMenu {...rest} />
      <NavMenu {...rest} isOpened={isOpened} type="SIDE" />
    </>
  );
};

export default HeaderContainer;