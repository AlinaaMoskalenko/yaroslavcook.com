import React from 'react';
import PropTypes from 'prop-types';

import NavMenu from '../nav-menu';

import classNames from 'classnames/bind';
import styles from './header.module.scss';

const Header = React.forwardRef(({ menuLink, isOpened }, ref) => {
  const cx = classNames.bind(styles);
  const classes = cx('header', {'headerHidden': isOpened });

  return (
    <div className={classes} ref={ref}>
      <div className={styles.titleBlock}>
        <div className={styles.title}>Yaroslav Moskalenko</div>
        <div className={styles.titleSmallScreen}>Chef Yaro</div>
        <div className={styles.subtitle}>International Chef & Yacht Chef</div>
      </div>

      <NavMenu menuLink={menuLink} />
    </div>
  );
});

Header.propTypes = {
  menuLink: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default Header;