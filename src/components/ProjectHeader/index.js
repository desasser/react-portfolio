import React from 'react';
import './style.css';

export default function index({title}) {
  return (
    <div className="project-header-wrapper">
      <p className="project-header-title">{title}</p>
    </div>
  )
}
