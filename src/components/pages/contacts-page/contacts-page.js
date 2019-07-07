import React from 'react';

import styles from './contacts-page.module.scss';

const ContactsPage = () => {
  return (
    <div className={styles.contactsPage}>
      <div className={styles.container}>
        <div className={styles.contentArea}>
          <h1>Contact me</h1>
          <div className={styles.contact}>
            <i className="far fa-envelope" />
            <span>yaroslavcook@gmail.com</span>
          </div>
          <div className={styles.contact}>
            <i className={`${"fas fa-phone"} ${styles.phone}`} />
            <span>
              <div>+393791988448 (Italy)</div>
              <div>+380674245796 (Ukraine)</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;