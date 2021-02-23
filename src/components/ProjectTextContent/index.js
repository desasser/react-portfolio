import React from 'react';
import "./style.css"

export default function ProjectTextContent() {
  return (
    <div>
      <p className="project-text-content-under-construction">
        This website is currently under construction and will be complete soon! 
        Please come back to explore my design process, thought processes, and the finished products!
      </p>
      <ul style={{ columns: '2' }} className="project-text-content-ul">
        <li className="project-text-content-list">
          <a className="project-text-content-links" href="https://github.com/desasser/">
            github repo
          </a>
        </li>
        <li className="project-text-content-list">
          <a className="project-text-content-links" href="https://uw-meets.herokuapp.com/">
            live site
          </a>
        </li>
      </ul>
    </div>
  )
}
