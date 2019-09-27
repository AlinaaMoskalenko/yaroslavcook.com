import React from 'react';

import image from './img/26.jpg';
import styles from './contacts-page.module.scss';

const ContactsPage = () => {
  return (
    <div className={styles.contactsPage}
      style={{'backgroundImage': `url(${ image })`}}>
      <div className={styles.content}>
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
      </div>
    </div>
  );
};

export default ContactsPage;