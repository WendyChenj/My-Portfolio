import React from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <HeaderBar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
