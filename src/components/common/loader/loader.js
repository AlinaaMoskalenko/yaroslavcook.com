import React from 'react';

import styles from './loader.module.scss';

const Loader = () => {
  let bubbles = [];
  for (let i = 0; i < 5; i++) {
    bubbles.push(<div key={i} className={styles.bubble} />);
  }

  return (
    <div className={styles.loader}>
      <h1>Cooking in progress...</h1>
      <div className={styles.cooking}>
        { bubbles }
        <div className={styles.area}>
          <div className={styles.sides}>
            <div className={styles.pan} />
            <div className={styles.handle} />
          </div>
          <div className={styles.pancake}>
            <div className={styles.pastry} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;