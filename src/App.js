import React from "react";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Meets from './pages/Meets';
import Dungen from './pages/Dungen';
import Kanjiapp from './pages/Kanjiapp';
import Workouts from './pages/Workouts';
import Dayplanner from './pages/Dayplanner';
import Weather from './pages/Weather';
import Contact from './pages/Contact';
// import styled, { css } from 'styled-components';
// import Sidebar from '../../components/Sidebar';
// import IconSet from '../../components/IconSet';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';

// const StyledIconSet = styled(IconSet)`
//   color:pink;
//   font-size:10em;
// `

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/projects" component={Projects} />
        {/* <Route exact path="/projects/:projectName" component={SingleProject} /> */}
        <Route exact path="/dungen" component={Dungen} />
        <Route exact path="/meets" component={Meets} />
        <Route exact path="/kanjiapp" component={Kanjiapp} />
        <Route exact path="/workouts" component={Workouts} />
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/dayplanner" component={Dayplanner} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;

// set up routes to pages
// ingredients for each page (sidenav, footer, etc), populated on app.js
// move on to easy ones (landing page>projects page>contact page>project page)