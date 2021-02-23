import React from 'react';
import Sidebar from '../../components/Sidebar';
import ProjectHeader from '../../components/ProjectHeader';
import IconSet from '../../components/IconSet';
import './style.css';

export default function Dungen() {

  return (
    <main>
      <Sidebar />
      <ProjectHeader title="DunGen"/>
      <div className="main-iconset">
        <IconSet />
      </div>
    </main>
  )
}
