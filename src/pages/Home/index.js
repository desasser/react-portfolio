import React from 'react';
import Sidebar from '../../components/Sidebar';
import IconSet from '../../components/IconSet';
import './style.css';

export default function index() {
  return (
    <main className="main-image responsive-img">
      <Sidebar />
      <div className="main-iconset">
        <IconSet />
      </div>
      <div className="home-welcome-wrapper">
        <span className="home-hello">Hello.</span>
        <br />
        <span className="home-greeting">Nice to meet you, I'm Daniel.</span>
      </div>
    </main>
  )
}
