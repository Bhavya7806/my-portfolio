import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <p>Ready to build something amazing?</p>
        <Link 
          to="/contact" 
          className={`${styles.btn} ${styles.btnSecondary}`}
        >
          Connect With Me
        </Link>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Bhavya Shah. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;