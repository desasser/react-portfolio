import React from 'react';
import Sidebar from '../../components/Sidebar';
import ProjectHeader from '../../components/ProjectHeader';
import IconSet from '../../components/IconSet';
import ProjectTextContent from '../../components/ProjectTextContent';
import './style.css';

export default function Dayplanner() {


  return (
    <main>
      <Sidebar />
      <ProjectHeader title="DayPlanner"/>
      <ProjectTextContent />
      <div className="main-iconset">
        <IconSet />
      </div>
    </main>
  )
}
