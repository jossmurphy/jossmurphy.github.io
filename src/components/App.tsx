import React from 'react';
import Art from '../pages/art';
import Projects from '../pages/projects';
import Resume from '../pages/resume';
import Home from '../pages/index';
import Work from '../pages/work';
import About from '../pages/about';
import Blueprint from '../pages/projects/blueprint'; //user research, visual design, web, information architecture
import Pillar from '../pages/projects/pillar'; // mobile, information architecture, second hand research
import Mask from '../pages/projects/mask'; // second hand research, design process, illustration (thoughtful product)
import FundRISE from '../pages/projects/fundrise'; //user research, iteration,
import Dimagi from '../pages/projects/dimagi'; //user research, iteration,

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

        <Route exact path="/projects/blueprint">
          <Blueprint />
        </Route>
        <Route exact path="/projects/pillar">
          <Pillar />
        </Route>
        <Route exact path="/projects/MASK">
          <Mask />
        </Route>
        <Route exact path="/projects/fundRISE">
          <FundRISE />
        </Route>
        <Route exact path="/projects/diamgi">
          <Dimagi />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
