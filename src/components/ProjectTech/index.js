import React from 'react';
import './style.css';

export default function ProjectTech({tech}) {
  return (
    // <div>
      <p className="project-tech-text project-tech-fade-in">
        Technologies Used: {tech}
      </p>
    // </div>
  )
}
