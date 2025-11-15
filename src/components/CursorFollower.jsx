import React, { useState, useEffect } from 'react';
import styles from './CursorFollower.module.css';
import { FaPaperPlane } from 'react-icons/fa'; // Using a paper plane as the "bird"

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div 
      className={styles.follower}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)` 
      }}
    >
      <FaPaperPlane />
    </div>
  );
};

export default CursorFollower;