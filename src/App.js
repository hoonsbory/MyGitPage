import React from 'react';
import './App.css';
import Header from './component/Header';
import AboutMe from './component/AboutMe'
import Project from './component/Project'
import Skills from './component/Skills'
import Contact from './component/Contact';


function App() {
  window.scrollTo(0,0)
  function boxClick(){
    document.getElementById("opacityBox").style.display = "none";
    document.getElementById("projectImg").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementsByClassName("mainSlide")[0].getElementsByClassName("slick-arrow")[0].style.display = "block";
      document.getElementsByClassName("mainSlide")[0].getElementsByClassName("slick-arrow")[1].style.display = "block";
  }
  return (
    <div className="App">
      <div id="opacityBox" onClick={()=> boxClick()}> </div>
      <p id="close" onClick={()=>boxClick()} 
      style={{cursor : "pointer", zIndex : "999",display : "none",color : "white", position : "fixed", top : 0, right : "20px", margin : 0, fontSize : "3rem"}}>x</p>
      <Header></Header>
      <AboutMe></AboutMe>
      <Project></Project>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
