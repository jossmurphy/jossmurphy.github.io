import React from 'react';
import Art from '../pages/art';
import Projects from '../pages/projects';
import Resume from '../pages/resume';
import Home from '../pages/index';
import Work from '../pages/work';
import About from '../pages/about';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/art">
          <Art />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
