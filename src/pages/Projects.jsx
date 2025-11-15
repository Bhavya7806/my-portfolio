import React from 'react';
import styles from './Projects.module.css';
import { projectData } from '../projectData.jsx'; // Make sure this is .jsx
import ProjectCard from '../components/ProjectCard';

// 1. Import the new icons
import { SiLeetcode, SiCodeforces, SiHackerrank } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

// 2. Create an array for your profiles
const codingProfiles = [
  {
    name: 'LeetCode',
    link: 'https://leetcode.com/u/bhavya_shah7806/',
    icon: <SiLeetcode />,
  },
  {
    name: 'Codeforces',
    link: 'https://codeforces.com/profile/BHAVYA7806',
    icon: <SiCodeforces />,
  },
  {
    name: 'HackerRank',
    link: 'https://www.hackerrank.com/profile/bhavya07082006',
    icon: <SiHackerrank />,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/Bhavya7806',
    icon: <FaGithub />,
  },
];

const Projects = () => {
  return (
    <section className={`${styles.projectsPage} container`}>
      <h2 className={styles.title}>Featured Projects</h2>

      <div className={styles.projectGrid}>
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* 3. --- ADD THIS NEW SECTION --- */}
      <div className={styles.profilesSection}>
        <h2 className={styles.title}>My Coding Profiles</h2>
        <div className={styles.profilesGrid}>
          {codingProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileLink}
            >
              {profile.icon}
              <span>{profile.name}</span>
            </a>
          ))}
        </div>
      </div>
      {/* ------------------------------- */}
      
    </section>
  );
};

export default Projects;