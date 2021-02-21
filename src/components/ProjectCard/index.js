import React from 'react'
import ProjectTitle from '../ProjectTitle';
import ProjectTech from '../ProjectTech';
import './style.css';

export default function ProjectCard() {
  return (
    <div className="project-card-wrapper">
      <ProjectTitle />
      <ProjectTech />
    </div>
  )
}
