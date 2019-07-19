import React from 'react';
import PropTypes from 'prop-types';

import styles from './about-chef.module.scss';

const AboutChef = React.forwardRef(
  ({ photo, data, style, description, onView }, ref) => {
    const { paragraph1, paragraph2, paragraph3, paragraph4 } = data;

    return (
      <div className={styles.aboutChef}>
        <div className={styles.photo}>
          <img src={photo} alt="Chef" />
        </div>
        <div className={styles.description}
          style={style}>
          <div ref={ref} className={styles.paragraphBlock}>
            <p>{ paragraph1 }</p>
            <p>{ paragraph2 }</p>
            <p>{ paragraph3 }</p>
            <p>{ paragraph4 }</p>
          </div>
          <div className={styles.readMore}
            onClick={onView}>
            { description ? 'Read less' : 'Read more' }
          </div>
        </div>
      </div>
    );
  }
);

AboutChef.defaultProps = {
  onView: () => {}
};

AboutChef.propTypes = {
  photo: PropTypes.string.isRequired,
  data: PropTypes.shape({
    paragraph1: PropTypes.string,
    paragraph2: PropTypes.string,
    paragraph3: PropTypes.string,
    paragraph4: PropTypes.string,
  }).isRequired,
  style: PropTypes.object,
  description: PropTypes.bool,
  onView: PropTypes.func
};

export default AboutChef;