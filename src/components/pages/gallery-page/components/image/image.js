import React from 'react';
import PropTypes from 'prop-types';

import styles from './image.module.scss';

const Image = ({ image, onViewPhoto }) => {
  const { url, description } = image;

  return (
    <div className={styles.img}
      style={{'backgroundImage': `url(${url})`}}
      onClick={() => onViewPhoto(image)}>
      <div className={styles.description}>
        <div>{description}</div>
      </div>
    </div>
  );
};

Image.defaultProps = {
  onViewPhoto: () => {}
};

Image.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  onViewPhoto: PropTypes.func
};

export default Image;