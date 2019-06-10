import React from 'react';
import PropTypes from 'prop-types';
import withTransition from './hoc';
import classNames from 'classnames/bind';
import styles from './photo-viewer.module.scss';
import IMG_1704 from '../../../photos/img/IMG_1704.jpg';

const PhotoViewer = ({ image, onToggleImage, className }) => {
  const { id = "_IMG_1704", url = IMG_1704, name = "Name", description = "Description" } = image;

  const exitButton = (
    <svg viewBox="0 0 180 180" className={styles.exitBtn}>
      <path d="M5 5 L175 175 M175 5 L5 175" />
    </svg>
  );

  const photo = {
    backgroundImage: `url(${url})`
  };

  const cx = classNames.bind(styles);
  const classes = cx('photoBlock', `${className}`);
  
  return (
    <div className={styles.viewerContainer}>
      { exitButton }
      <div className={styles.photoViewer}>
      <div className={styles.toggle} onClick={() => onToggleImage(id, -1)} /> 

        <div className={classes}>
          <div className={styles.photo} style={photo} />
          <div className={styles.infoBlock}>
            <span>{ name }</span>
            <span>{ description }</span>
          </div>
        </div>
        
      <div className={styles.toggle} onClick={() => onToggleImage(id, 1)} /> 
      </div>
    </div>
  );
};

PhotoViewer.defaultProps = {
  onToggleImage: () => {}
};

PhotoViewer.propTypes =  {
  image: PropTypes.shape({
    id: PropTypes.any,
    url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
  }),
  onToggleImage: PropTypes.func,
  className: PropTypes.string
};

export default withTransition(PhotoViewer);