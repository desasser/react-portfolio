import React from 'react';
import Sidebar from '../../components/Sidebar';
import IconSet from '../../components/IconSet';
import ProjectCard from '../../components/ProjectCard';
import './style.css';

export default function Projects() {
  return (
    <main className="project-landing-page">
      <Sidebar />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <IconSet />
    </main>
  )
}
