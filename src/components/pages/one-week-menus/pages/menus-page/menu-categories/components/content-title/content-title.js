import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './content-title.module.scss';

const ContentTitle = ({ title, slices, onArrowClick, type }) => {
  const cx = classNames.bind(styles);
  const classes = cx('menuDayTitle', { 'withoutArrow': type === 'SIMPLE' });

  const menuDayTitle = (
    <>
      <i className="fas fa-chevron-left"
        onClick={() => onArrowClick(-1, slices)} />

      {title}

      <i className="fas fa-chevron-right"
        onClick={() => onArrowClick(1, slices)} />
    </>
  );
  return (
    <h1 className={classes}>
      { slices !== undefined ? menuDayTitle : title }
    </h1>
  );
};

ContentTitle.defaultProps = {
  onArrowClick: () => {},
  type: 'PRIMARY'
};

ContentTitle.propTypes = {
  title: PropTypes.string,
  slices: PropTypes.number,
  onArrowClick: PropTypes.func,
  type: PropTypes.string
};

export default ContentTitle;