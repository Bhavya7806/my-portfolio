import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={project.mainImage} alt={project.title} className={styles.projectImage} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.brief}</p>
        <p className={styles.tech}>{project.techSimple}</p>
        
        <div className={styles.links}>
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkButton}
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkButton}
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
      
      <Link to={`/projects/${project.id}`} className={styles.viewMore}>
        View More &rarr;
      </Link>
    </div>
  );
};

export default ProjectCard;