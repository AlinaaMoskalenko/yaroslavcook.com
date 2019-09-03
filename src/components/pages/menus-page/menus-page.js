import React from 'react';

import styles from './menus-page.module.scss';

const MenusPage = () => {
  return (
    <div className={styles.menusPage}>
      {/* sweets */}
      <div className={styles.sweets}>
        <h1>Sweets menu</h1>
      </div>
      
      {/* pastry */}
      <div className={styles.pastry}>
        <h1>Pastry menu</h1>
      </div>
    </div>
  );
};

export default MenusPage;