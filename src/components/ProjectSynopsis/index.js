import React from 'react'
import './style.css';

export default function ProjectSynopsis(props) {
  return (
    <p className="project-title-synopsis">{props.synopsis}</p>
  )
}
