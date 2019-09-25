import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './breadcrumbs.module.scss';

const Breadcrumbs = ({ items }) => {
  const cx = classNames.bind(styles);

  const links = items.map(({ url, title, active }) => {
    const classes = cx('link', { 'linkActive': active });
    return <Link key={url} to={url} className={classes}>{title}</Link>;
  });

  return (
    <div className={styles.breadcrumbs}>
      { links }
    </div>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

export default Breadcrumbs;