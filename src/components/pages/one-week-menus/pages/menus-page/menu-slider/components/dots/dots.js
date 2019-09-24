import React from 'react';
import PropTypes from 'prop-types';
import withClass from './with-class';

import classNames from 'classnames/bind';
import styles from './dots.module.scss';

const cx = classNames.bind(styles);

const Dots = ({ id, className, onDotClick }) => {
  const classes = cx('dot', className);

  return <div id={id} className={classes} onClick={onDotClick} />;
};

Dots.defaultProps = {
  onDotClick: () => {}
};

Dots.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
  onDotClick: PropTypes.func
};

export default withClass(Dots);