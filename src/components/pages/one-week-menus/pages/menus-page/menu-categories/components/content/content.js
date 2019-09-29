import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './content.module.scss';

const Content = ({ content, type, change }) => {
  const cx = classNames.bind(styles);
  const classes = cx({
    'primary': type === 'PRIMARY',
    'primaryChange': change,
    'extended': type === 'EXTENDED'
  });

  const extendedMenu = (
    <>
      <div className={styles.menu}>
        <h1 className={styles.blockTitle}>Lunch</h1>
        { content[0] }
      </div>
      <div className={styles.menu}>
        <h1 className={styles.blockTitle}>Dinner</h1>
        { content[1] }
      </div>
    </>
  );

  return (
    <div className={classes}>
       { type === 'EXTENDED' ? extendedMenu : content } 
    </div>
  );
};

Content.defaultProps = {
  type: 'PRIMARY',
  change: false
};

Content.propTypes = {
  content: PropTypes.arrayOf(PropTypes.node),
  type: PropTypes.string,
  change: PropTypes.bool
};

export default Content;