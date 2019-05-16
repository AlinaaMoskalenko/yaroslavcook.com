import React from 'react';
import PropTypes from 'prop-types';
import styles from './image.module.scss';

const Image = ({ deviceSize, image, onViewPhoto }) => {
  const { url, name, description,
          rotate, backgroundSize, backgroundPositionX,
          backgroundPositionY } = image;

  const normalImage = {
    backgroundImage: `url(${url})`,
    transform: `rotate(${rotate}deg)`,
    backgroundSize,
    backgroundPositionX,
    backgroundPositionY
  };

  const smallSizeImage = {
    backgroundImage: `url(${url})`,
    transform: `rotate(${rotate}deg)`,
    backgroundSize,
    backgroundPositionX,
    backgroundPositionY,
    width: `${deviceSize - 10}px`,
    height: `${deviceSize - 10}px`
  };

  return (
    <div className={styles.img}
      style={(deviceSize < 330) ? smallSizeImage : normalImage}
      onClick={onViewPhoto}>
      <div className={styles.description}>
        <div>{name}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

Image.defaultProps = {
  onViewPhoto: () => {}
};

Image.propTypes = {
  deviceSize: PropTypes.number,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    rotate: PropTypes.number,
    backgroundSize: PropTypes.string,
    backgroundPositionX: PropTypes.string,
    backgroundPositionY: PropTypes.string
  }).isRequired,
  onViewPhoto: PropTypes.func
};

export default Image;