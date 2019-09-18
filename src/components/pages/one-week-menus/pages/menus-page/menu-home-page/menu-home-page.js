import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './menu-home-page.module.scss';

const MenusHomePage = ({ history }) => {
  const path = history.location.pathname;

  return (
    <div className={styles.menusPage}>
      {/* french charter dinner menu */}
      <Link to={`${path}/french-charter-dinner`} className={styles.frenchCharter}>
        <div className={styles.titleContainer}>
          French charter dinner menu
        </div>
      </Link>

      {/* desserts */}
      <Link to={`${path}/desserts`} className={styles.desserts}>
        <div className={styles.titleContainer}>
          Desserts menu
        </div>
      </Link>

      {/* crew menu */}
      <Link to={`${path}/crew`} className={styles.crew}>
        <div className={styles.titleContainer}>
          Crew menu
        </div>
      </Link>

      {/* pastry */}
      <Link to={`${path}/pastry`} className={styles.pastry}>
        <div className={styles.titleContainer}>
          Pastry menu
        </div>
      </Link>
      
      {/* middle eastern menu */}
      <Link to={`${path}/middle-eastern`} className={styles.middleEastern}>
        <div className={styles.titleContainer}>
          Middle Eastern menu
        </div>
      </Link>
    </div>
  );
};

export default withRouter(MenusHomePage);