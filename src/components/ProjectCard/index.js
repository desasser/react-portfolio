import React from 'react'
import ProjectTitle from '../ProjectTitle';
import ProjectTech from '../ProjectTech';
import './style.css';

export default function ProjectCard({details}) {
  return (
    <div className="project-card-wrapper">
      <ProjectTitle title={details.title} synopsis={details.synopsis} className="project-title"/>
      <ProjectTech tech={details.tech} className="project-tech"/>
    </div>
  )
}
