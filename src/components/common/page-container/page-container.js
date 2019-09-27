import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './page-container.module.scss';

const PageContainer = React.forwardRef(({ children, image, type, position }, ref) => {
  const cx = classNames.bind(styles);
  
  const pageContainer = cx(
    'pageContainer',
    { 'pageContainerPrimary': type === 'PRIMARY',
      'pageContainerMenu': type === 'MENU',
      'contentLeft': position === 'LEFT',
      'contentCenter': position === 'CENTER' }
  );

  return (
    <div ref={ref}
      className={pageContainer}
      style={{'backgroundImage': `url(${ image })`}}>
      <div className={styles.contentArea}>
        { children }
      </div>
    </div>
  );
});

PageContainer.defaultProps = {
  type: 'PRIMARY',
  position: 'LEFT'
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
  type: PropTypes.string,
  position: PropTypes.string
};

export default PageContainer;