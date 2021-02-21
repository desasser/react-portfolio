import React from 'react';
import Sidebar from '../../components/Sidebar';
import IconSet from '../../components/IconSet';
import ProjectCard from '../../components/ProjectCard';
import './style.css';

export default function Projects() {
  return (
    <div>
      <Sidebar />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <IconSet />
    </div>
  )
}
