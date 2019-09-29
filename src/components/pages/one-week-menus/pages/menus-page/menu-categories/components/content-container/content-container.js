import React from 'react';
import PropTypes from 'prop-types';

import styles from './content-container.module.scss';

const ContentContainer = ({ children, className }) => {
  const classes = `${styles.contentContainer} ${className}`;
  
  return (
    <div className={classes}>
      { children }
    </div>
  );
};

ContentContainer.propTypes = {
  children: PropTypes.node
};

export default ContentContainer;