import React from "react";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Sidebar />
    </div>

  );
}

export default App;

// set up routes to pages
// ingredients for each page (sidenav, footer, etc), populated on app.js
// move on to easy ones (landing page>projects page>contact page>project page)