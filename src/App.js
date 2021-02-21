import React from "react";
import Home from './pages/Home';
import Projects from './pages/Projects';
// import styled, { css } from 'styled-components';
// import Sidebar from '../../components/Sidebar';
// import IconSet from '../../components/IconSet';
import './index.css';

// const StyledIconSet = styled(IconSet)`
//   color:pink;
//   font-size:10em;
// `

function App() {
  return (
    <div>
      {/* <Sidebar /> */}
      {/* <Home /> */}
      <Projects />
      {/* <StyledIconSet /> */}
    </div>
  );
}

export default App;

// set up routes to pages
// ingredients for each page (sidenav, footer, etc), populated on app.js
// move on to easy ones (landing page>projects page>contact page>project page)