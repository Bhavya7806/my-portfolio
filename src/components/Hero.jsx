import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import profileImage from '../assets/profile.png'; // Import your photo

const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Hi, I'm <span className={styles.name}>Bhavya Shah</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Welcome to my portfolio.
        </p>
        <p className={styles.heroDescription}>
          I'm a 2nd-year technology student at VIT-AP University, passionate about building full-stack web applications and exploring new technologies.
        </p>
        
        {/* Button Section */}
        <div className={styles.buttonContainer}>
          <a 
            href="/resume.pdf" // Put your resume in 'public/' folder
            download="Bhavya_Shah_Resume.pdf"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Download Resume
          </a>
          <Link 
            to="/projects" 
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            View My Work
          </Link>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className={styles.heroImageContainer}>
        <div className={styles.heroImageBorder}>
          <img 
            src={profileImage} 
            alt="Bhavya Shah" 
            className={styles.heroImage} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;