import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./style.css";

import Nav from './Nav';
import Home from './Home';
import About from './About';

export default function App() {
  return (
    <div>
      <Router>
      <Nav />
      <Switch>
        <Route>
          <Home />
        </Route>
        <Route>
          <About/>
        </Route>
      </Switch>
      
      </Router>
    </div>
  );
}
