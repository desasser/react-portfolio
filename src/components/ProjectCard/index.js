import React from 'react'
import ProjectTitle from '../ProjectTitle';
import ProjectTech from '../ProjectTech';
import ProjectTextContent from '../ProjectTextContent';

export default function ProjectCard() {
  return (
    <div>
      <ProjectTitle />
      <ProjectTextContent />
      <ProjectTech />
    </div>
  )
}
