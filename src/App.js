import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import AboutMe from './component/aboutMe'
import Project from './component/project'
import Skills from './component/skills'
import Contact from './component/contact';

function App() {
    
  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Project></Project>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
