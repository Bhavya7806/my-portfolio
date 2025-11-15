// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import styles from './Navbar.module.css'; // Import our CSS Module
import { FaPaperPlane } from 'react-icons/fa'; // A sample logo icon

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* 1. Logo and Name */}
        <Link to="/" className={styles.logo}>
        <FaPaperPlane size={30} />
          <span>Bhavya Shah</span>
        </Link>

        {/* 2. Navigation Links */}
        <ul className={styles.navMenu}>
          <li>
            <Link to="/about" className={styles.navLink}>About Me</Link>
          </li>
          <li>
            <Link to="/projects" className={styles.navLink}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navLink}>Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;