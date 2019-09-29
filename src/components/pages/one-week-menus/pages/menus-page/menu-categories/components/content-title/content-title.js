import React from 'react';
import PropTypes from 'prop-types';

import styles from './content-title.module.scss';

const ContentTitle = ({ title, dayId, slices, onArrowClick }) => {
  const menuDayTitle = (
    <>
      <i className="fas fa-chevron-left"
        onClick={() => onArrowClick(-1, slices)} />

      Day {dayId}

      <i className="fas fa-chevron-right"
        onClick={() => onArrowClick(1, slices)} />
    </>
  );
  return (
    <h1 className={styles.menuDayTitle}>
      { dayId !== undefined ? menuDayTitle : title }
    </h1>
  );
};

ContentTitle.defaultProps = {
  onArrowClick: () => {}
};

ContentTitle.propTypes = {
  title: PropTypes.string,
  dayId: PropTypes.number,
  slices: PropTypes.number,
  onArrowClick: PropTypes.func
};

export default ContentTitle;