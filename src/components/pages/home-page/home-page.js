import React from 'react';
import chef from './img/chef_photo.jpg';
import data from './chef_description';

import styles from './home-page.module.scss';

const HomePage = () => {
   return (
    <div className={styles.homePage}>
      <div className={styles.categoryBanner}></div>
      <div className={styles.aboutChef}>
        <div className={styles.photo}>
          <img src={chef} alt="Chef" />
        </div>
        <div className={styles.description}>
          <p>{ data.paragraph1 }</p>
          <p>{ data.paragraph2 }</p>
          <p>{ data.paragraph3 }</p>
          <p>{ data.paragraph4 }</p>
        </div>
      </div>
    </div>
   );
};

export default HomePage;