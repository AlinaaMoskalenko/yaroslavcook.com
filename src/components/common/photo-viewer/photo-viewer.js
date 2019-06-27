import React from 'react';
import PropTypes from 'prop-types';

import withTransition from './hoc';

import classNames from 'classnames/bind';
import styles from './photo-viewer.module.scss';

const PhotoViewer = ({ photo, onTogglePhoto, className }) => {
  const { id, url, description = "Description" } = photo;

  const cx = classNames.bind(styles);
  const classes = cx('photoBlock', `${className}`);
  
  return (
    <div className={styles.photoViewer}>
      <div className={styles.toggle} onClick={() => onTogglePhoto(id, -1)} /> 

        <div className={classes}>
          <div className={styles.photo} style={{ 'backgroundImage': `url(${url})` }} />
          <div className={styles.description}>{ description }</div>
        </div>
        
      <div className={styles.toggle} onClick={() => onTogglePhoto(id, 1)} /> 
    </div>
  );
};

PhotoViewer.defaultProps = {
  onTogglePhoto: () => {}
};

PhotoViewer.propTypes =  {
  photo: PropTypes.shape({
    id: PropTypes.any,
    url: PropTypes.string,
    description: PropTypes.string
  }),
  onTogglePhoto: PropTypes.func,
  className: PropTypes.string
};

export default withTransition(PhotoViewer);