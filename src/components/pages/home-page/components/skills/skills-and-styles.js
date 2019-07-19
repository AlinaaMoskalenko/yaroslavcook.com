import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../typography/icofont/icofont.min.css';
import styles from './skills-and-styles.module.scss';

const SkillsAndStyles = ({ data }) => {
  const { title, items } = data;

  const itemList = items.map((item, idx) => (
    <div key={idx} className={styles.item}>
      <i className="fas fa-utensils" />
      <span className={styles.title}>{ item }</span>
    </div>
  ));

  return (
    <div className={styles.skillsAndStyles}>
      <div className={styles.header}>
        <i className={`${"icofont-chef"} ${styles.hatIcon}`} />
        <span className={styles.title}>{ title }</span>
      </div>

      <div className={styles.body}>
        { itemList }
      </div>
    </div>
  );
};

SkillsAndStyles.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default SkillsAndStyles;