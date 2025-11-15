import React from 'react';
import styles from './Contact.module.css';

// Import all the icons we'll need
import { 
  MdEmail, 
  MdLocationOn 
} from 'react-icons/md';
import { 
  FaLinkedin, 
  FaInstagram, 
  FaGoogle, 
  FaCheck 
} from 'react-icons/fa';

const Contact = () => {

  // Handler for the "Send" button (prevents page reload)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (UI-only demo)");
    // In a real app, you'd send form data here
  };

  // Handler for "in construction" links
  const inConstruction = (e) => {
    e.preventDefault(); // Stop the link from trying to go anywhere
    alert("Sorry, this link is under construction!");
  };

  return (
    <section className={`${styles.contactPage} container`}>
      <div className={styles.wrapper}>
        
        {/* ----- LEFT COLUMN: FORM & AVAILABILITY ----- */}
        <div className={styles.contactForm}>
          <h2>Get In Touch</h2>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.sendButton}>
              Send Message
            </button>
          </form>

          <div className={styles.availability}>
            <h3>Currently available for:</h3>
            <ul>
              <li><FaCheck /> Freelance projects</li>
              <li><FaCheck /> Full-time opportunities</li>
              <li><FaCheck /> Internships</li>
            </ul>
          </div>
        </div>

        {/* ----- RIGHT COLUMN: INFO & SOCIALS ----- */}
        <div className={styles.contactInfo}>
          <h2>Contact Info</h2>
          
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <MdEmail />
              <span>bhavya07082006@gmail.com</span>
            </li>
            <li className={styles.infoItem}>
              <MdLocationOn />
              <span>VIT-AP University</span>
            </li>
          </ul>

          <div className={styles.socials}>
            {/* LinkedIn: Real Link */}
            <a 
              href="https://www.linkedin.com/in/bhavya-shah-06681b1b6/"
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            
            {/* Instagram: In Construction */}
            <a 
              href="#"
              onClick={inConstruction}
              className={styles.socialIcon}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            {/* Google: In Construction */}
            <a 
              href="#"
              onClick={inConstruction}
              className={styles.socialIcon}
              aria-label="Google"
            >
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;