import React from 'react';
import styles from './About.module.css';
import profileImage from '../assets/profile.png'; // Re-using your profile photo

// Icons for the skills section
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCplusplus, SiFastapi, SiC } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const About = () => {
  return (
    <section className={`${styles.aboutPage} container`}>
      
      {/* 1. My Story Section */}
      <div className={styles.storySection}>
        <div className={styles.aboutImage}>
          <img src={profileImage} alt="Bhavya Shah" />
        </div>
        <div className={styles.storyContent}>
          <h2>My Story</h2>
          <p>
            Hello again! I'm Bhavya, a 2nd-year student at VIT-AP University. 
            My journey into tech started with a simple "Hello World," and 
            I've been hooked ever since. I'm driven by the challenge of 
            solving problems and the thrill of building something from 
            nothing.
          </p>
          <p>
            I'm particularly passionate about full-stack development, 
            connecting the dots between a seamless user interface and a 
            robust, scalable backend. I'm constantly learning and 
            eager to contribute to projects that make a difference.
          </p>
        </div>
      </div>

      {/* 2. Skills & Technologies Section */}
      <div className={styles.skillsSection}>
        <h2>My Skills & Technologies</h2>
        <div className={styles.skillsContainer}>
          
          {/* Frontend Card */}
          <div className={styles.skillCard}>
            <h3><FaReact /> Frontend</h3>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          
          {/* Backend Card */}
          <div className={styles.skillCard}>
            <h3><FaNodeJs /> Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>FastAPI</li>
              <li>Java</li>
            </ul>
          </div>
          
          {/* Other Card */}
          <div className={styles.skillCard}>
            <h3><TbSql /> Languages & Databases</h3>
            <ul>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>C++</li>
              <li>C</li>
            </ul>
          </div>

        </div>
      </div>

      {/* 3. Philosophy Section */}
      <div className={styles.philosophySection}>
        <h3>My Philosophy</h3>
        <p>
          "Code is like a puzzle. There are many ways to solve it, 
          but the most elegant solution is a work of art."
        </p>
      </div>

    </section>
  );
};

export default About;