import React from 'react';
import Header from './header';
import NavMenu from '../nav-menu';

const HeaderContainer = React.forwardRef(({ menuLink, isOpened, ...rest }, ref) => {
  return (
    <>
      <Header menuLink={menuLink} isOpened={isOpened} ref={ref} />
      <NavMenu {...rest} menuLink={menuLink} isOpened={isOpened} type="SIDE" />
    </>
  );
});

export default HeaderContainer;