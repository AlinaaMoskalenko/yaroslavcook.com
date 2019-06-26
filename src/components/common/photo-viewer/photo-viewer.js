import React from 'react';
import PropTypes from 'prop-types';
import withTransition from './hoc';
import classNames from 'classnames/bind';
import styles from './photo-viewer.module.scss';

const PhotoViewer = ({ photo, onTogglePhoto, className }) => {
  const { id, url, description = "Description" } = photo;

  const exitButton = (
    <svg viewBox="0 0 180 180" className={styles.exitBtn}>
      <path d="M5 5 L175 175 M175 5 L5 175" />
    </svg>
  );

  const setPhoto = {
    backgroundImage: `url(${url})`
  };

  const cx = classNames.bind(styles);
  const classes = cx('photoBlock', `${className}`);
  
  return (
    <div className={styles.viewerContainer}>
      { exitButton }
      <div className={styles.photoViewer}>
      <div className={styles.toggle} onClick={() => onTogglePhoto(id, -1)} /> 

        <div className={classes}>
          <div className={styles.photo} style={setPhoto} />
          <div className={styles.infoBlock}>
            <span>{ description }</span>
          </div>
        </div>
        
      <div className={styles.toggle} onClick={() => onTogglePhoto(id, 1)} /> 
      </div>
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