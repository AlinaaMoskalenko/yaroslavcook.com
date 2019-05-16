import React from 'react';
import styles from './photo-viewer.module.scss';

const PhotoViewer = () => {
  const exitButton = (
    <svg viewBox="0 0 180 180" className={styles.exitBtn}>
      <path d="M5 5 L175 175 M175 5 L5 175" />
    </svg>
  );
  
  return (
    <div className={styles.viewerContainer}>
      { exitButton }

    </div>
  );
};

export default PhotoViewer;