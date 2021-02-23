import React from 'react';
import Sidebar from '../../components/Sidebar';
import IconSet from '../../components/IconSet';
import ProjectCard from '../../components/ProjectCard';
import './style.css';

export default function Projects() {
  const projArr = [{
    title: 'DunGen',
    synopsis: 'Novel app for game masters and fantasy enthusiasts to build dungeon maps',
    tech: 'React, Material-UI, Express, Node, Sequelize'
  },
  {
    title: 'Meets',
    synopsis: 'Next-gen social media experience focused on bringing people together',
    tech: 'Express, Node, Sequelize, DialogFlow, Imgur API'
  },
  {
    title: 'KanjiApp',
    synopsis: 'Study Japanese Kanji and expand your horizons',
    tech: 'HTML5, Javascript, JQuery, CSS, LocalStorage, Unsplash API, KanjiAlive API'
  },
  {
    title: 'WorkOuts',
    synopsis: 'Workout tracker and planner for building personal workouts',
    tech: 'MongoDB, Mongoose, Heroku, MongoDB Atlas'
  },
  {
    title: 'Weather',
    synopsis: 'Weather app for practice using AJAX calls and local storage',
    tech: 'AJAX, local storage, openweather API'
  },
  {
    title: 'DayPlanner',
    synopsis: 'Day planner for practice using local storage and moment.js',
    tech: 'Moment.js, local storage'
  }]

  return (
    <main>
      <Sidebar />
      <div className="project-cards-wrapper">
        {projArr.map(project => <ProjectCard key={project.title} details={project} />)}
        <div className="main-iconset">
          <IconSet />
        </div>
      </div>
    </main>
  )
}
