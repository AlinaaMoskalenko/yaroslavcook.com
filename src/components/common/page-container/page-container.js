import React from 'react';
import PropTypes from 'prop-types';

import styles from './page-container.module.scss';

const PageContainer = ({ children, image }) => {
  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.mainContentContainer}
        style={{'backgroundImage': `url(${ image })`}}>
        <div className={styles.contentArea}>
          { children }
        </div>
      </div>
    </div>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string
};

export default PageContainer;