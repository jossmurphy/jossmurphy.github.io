import React from 'react';
import Art from './art/Art';
import Projects from './projects/Projects';
import Resume from './resume/Resume';
import Home from './Home';
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
