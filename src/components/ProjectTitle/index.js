import React from 'react';
import "./style.css"

export default function ProjectTitle({title, synopsis}) {
  return (
    <div className="project-title-wrapper">
      <p className="project-title">{title}</p>
      <p className="project-title-synopsis">{synopsis}</p>
    </div>
  )
}
