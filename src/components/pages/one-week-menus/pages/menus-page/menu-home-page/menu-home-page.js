import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './menu-home-page.module.scss';

const MenusHomePage = ({ history }) => {
  const path = history.location.pathname;

  return (
    <div className={styles.menusPage}>
      {/* crew menu */}
      
      {/* middle eastern menu */}

      {/* french charter dinner menu */}

      {/* sweets */}
      <Link to={`${path}/sweets`} className={styles.sweets}>
        <h1>Sweets menu</h1>
      </Link>
      
      {/* pastry */}
      <Link to={`${path}/pastry`} className={styles.pastry}>
        <h1>Pastry menu</h1>
      </Link>
    </div>
  );
};

export default withRouter(MenusHomePage);