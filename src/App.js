import React from "react";
import "./style.css";

import Nav from './Nav';
import Home from './Home';
import About from './About';

export default function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About/>
    </div>
  );
}
