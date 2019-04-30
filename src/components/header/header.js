import React from 'react';
import PropTypes from 'prop-types';
import NavMenu from '../nav-menu';
import styles from './header.module.scss';

const Header = ({ menuLink }) => {
  return (
    <div className={styles.header}>
      <div className={styles.titleBlock}>
        <div className={styles.title}>Yaroslav Moskalenko</div>
        <div className={styles.titleSmallScreen}>Chef Yaro</div>
        <div className={styles.subtitle}>International Chef & Yacht Chef</div>
      </div>
      
      <NavMenu link={menuLink} />
    </div>
  );
};

Header.propTypes = {
  menuLink: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default Header;