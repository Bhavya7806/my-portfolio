import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../projectData.jsx'; // Import our data
import styles from './ProjectDetail.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetail = () => {
  // 1. Get the 'id' from the URL (e.g., /projects/financial-guru)
  const { id } = useParams();

  // 2. Find the correct project from our data
  const project = projectData.find((p) => p.id === id);

  // 3. If no project is found (bad URL), show a message
  if (!project) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: '5rem' }}>
        <h2>Project not found!</h2>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  // 4. If we found the project, render it
  return (
    <section className={styles.detailPage}>
      {/* 1. Banner Image & Title */}
      <header className={styles.header}>
        <img src={project.mainImage} alt={`${project.title} banner`} className={styles.bannerImage} />
        <div className={styles.headerOverlay}>
          <h1 className={styles.title}>{project.title}</h1>
        </div>
      </header>

      <div className={`${styles.contentWrapper} container`}>
        {/* 2. Overview & Tech Stack */}
        <div className={styles.overviewSection}>
          <div className={styles.overview}>
            <h2>Overview</h2>
            <p>{project.overview}</p>
            <div className={styles.links}>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          <div className={styles.techStack}>
            <h2>Tech Stack</h2>
            <ul className={styles.techList}>
              {project.techStack.map((tech) => (
                <li key={tech.name}>
                  {tech.icon} <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Key Features */}
        <div className={styles.features}>
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* 4. Additional Screenshots */}
        <div className={styles.gallery}>
          <h2>Screenshots</h2>
          <div className={styles.galleryGrid}>
            {project.gallery.map((image, index) => (
              <img key={index} src={image} alt={`Project screenshot ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;