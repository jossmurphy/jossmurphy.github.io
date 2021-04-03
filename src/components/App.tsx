import React from 'react';
import Art from '../pages/art';
import Projects from '../pages/projects';
import Resume from '../pages/resume';
import Home from '../pages/index';
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
      </Switch>
    </Router>
  );
}

export default App;
