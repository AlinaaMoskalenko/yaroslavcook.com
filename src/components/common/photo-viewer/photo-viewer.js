import React from 'react';
import PropTypes from 'prop-types';

import withTransition from './hoc';

import classNames from 'classnames/bind';
import styles from './photo-viewer.module.scss';

const PhotoViewer = ({ photo, prevPhoto, onTogglePhoto, className }) => {
  const { id, url, description } = photo;
  const loading = prevPhoto === id;

  const cx = classNames.bind(styles);
  const classes = cx('photoBlock', `${className}`);
  
  return (
    <div className={styles.photoViewer}>
      <i className="fas fa-chevron-left" onClick={() => onTogglePhoto(id, -1)} /> 

      <div className={classes}>
        { !loading && 
        ( <>
            <img className={styles.photo} src={url} alt="Tasty dish" />
            <div className={styles.description}>{ description }</div>
          </> ) 
        }
      </div>
        
      <i className="fas fa-chevron-right" onClick={() => onTogglePhoto(id, 1)} /> 
    </div>
  );
};

PhotoViewer.defaultProps = {
  onTogglePhoto: () => {}
};

PhotoViewer.propTypes =  {
  photo: PropTypes.shape({
    id: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string
  }),
  onTogglePhoto: PropTypes.func,
  className: PropTypes.string
};

export default withTransition(PhotoViewer);