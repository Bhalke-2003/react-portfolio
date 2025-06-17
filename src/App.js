import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import "./App.css";

function App() {
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
