import React from 'react';
import styles from './TechStack.module.css';
import { 
  FaJava, FaJs, FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs, FaDatabase
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiCplusplus, SiC, SiFastapi 
} from 'react-icons/si';
// Note: There is no official 'tailwind' icon in react-icons. 
// We'll use a generic one or you can import an SVG.

const icons = [
  { icon: <FaJava />, name: "Java" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaDatabase />, name: "SQL" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiC />, name: "C" },
  { icon: <SiFastapi />, name: "FastAPI" },
  // { icon: <SiTailwindcss />, name: "Tailwind" }, // Uncomment if you add tailwind icon
];

const TechStack = () => {
  return (
    <section className={`${styles.techStack} container`}>
      <h2 className={styles.title}>My Tech Stack</h2>
      <div className={styles.iconGrid}>
        {icons.map((tech, index) => (
          <div className={styles.techIcon} key={index}>
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;