import React from 'react';
import styles from './footer.module.scss';
import '../../typography/font-awesome/all.min.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://www.facebook.com/yaroslavcook"
        className={styles.link} 
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="https://www.instagram.com/iaroslavmoskalenko/"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-instagram" />
      </a>
      <a href='skype:yaroslavcook?chat' 
        className={styles.link}>
        <i className="fab fa-skype" />
      </a>
    </div>
  );
};

export default Footer;