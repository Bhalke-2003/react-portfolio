import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
