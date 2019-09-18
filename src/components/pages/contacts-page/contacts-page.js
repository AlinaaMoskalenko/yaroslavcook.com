import React from 'react';

import PageContainer from '../../common/page-container';
import image from './img/26.jpg';

import styles from './contacts-page.module.scss';

const ContactsPage = () => {
  return (
    <PageContainer image={image}>
      <h1 className={styles.title}>Contact me</h1>
      <div className={styles.contact}>
        <i className="far fa-envelope" />
        <span>yaroslavcook@gmail.com</span>
      </div>
      <div className={styles.contact}>
        <i className={`${"fas fa-phone"} ${styles.phoneIcon}`} />
        <span>
          <div>+393791988448 (Italy)</div>
          <div>+380674245796 (Ukraine)</div>
        </span>
      </div>
    </PageContainer>
  );
};

export default ContactsPage;