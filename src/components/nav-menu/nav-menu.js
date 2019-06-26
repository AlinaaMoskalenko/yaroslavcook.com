import React from 'react';
import { Link, matchPath, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './nav-menu.module.scss';

const cx = classNames.bind(styles);

const NavMenu = ({ link, isOpened, toggleNavMenu, type, location }) => {
  const isActive = (path) => {
    const opts = {
      path,
      exact: path === '/'
    };

    return !!matchPath(location.pathname, opts);
  };

  const menuLinks = link.map(({ name, link }) => {
    const classes = cx('link', { 'linkActive': isActive(link) });

    return <Link to={link}
              key={name}
              className={classes}
              onClick={toggleNavMenu}>
              { name }
           </Link>;
  });

  const classesMenu = cx({
    'navMenu': type === 'NORMAL',
    'sideMenu': type === 'SIDE',
    'sideMenuOpened': isOpened && type === 'SIDE'
  });

  return (
    <div className={classesMenu}>
      <div className={styles.toggle} onClick={toggleNavMenu}>
        <div className={styles.toggleLine} />
        <div className={styles.toggleLine} />
        <div className={styles.toggleLine} />
      </div>

      <div className={styles.linkBlock}>
        { menuLinks }
      </div>
    </div>
  );
};

NavMenu.defaultProps = {
  toggleNavMenu: () => {},
  type: 'NORMAL'
};

NavMenu.propTypes = {
  link: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })),
  isOpened: PropTypes.bool,
  toggleNavMenu: PropTypes.func,
  type: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default withRouter(NavMenu);