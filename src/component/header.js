import React, { Component } from 'react'
import '../css/header.css';


export default class header extends Component {
  render(){
    document.addEventListener('scroll', function() {
      console.log(document.getElementsByClassName("et-hero-tabs")[0].scrollHeight);
      if(window.scrollY>=document.getElementsByClassName("et-hero-tabs")[0].scrollHeight-document.getElementsByClassName("et-hero-tabs-container")[0].scrollHeight&&document.getElementsByClassName("et-hero-tabs-container")[0]){
        document.getElementsByClassName("et-hero-tabs-container")[0].setAttribute("class","et-hero-tabs-container et-hero-tabs-container--top")
      }else{
        document.getElementsByClassName("et-hero-tabs-container")[0].setAttribute("class","et-hero-tabs-container");
      }
  });
    
    return (
      <div className="header">
        <section id="fuck" className="et-hero-tabs">
          <h1>풀스택 개발자를 꿈꾸는 신입개발자입니다</h1>
          <h3>FullStack Developer</h3>
          <div className="et-hero-tabs-container">
            <a className="et-hero-tab" onClick={() => window.scrollTo(0, 0)}>Home</a>
            <a className="et-hero-tab" onClick={() => document.getElementById("aboutMe").scrollIntoView()}>AboutMe</a>
            <a className="et-hero-tab" onClick={() => document.getElementById("project").scrollIntoView()}>Project</a>
            <a className="et-hero-tab" onClick={() => document.getElementById("skills").scrollIntoView()}>Skills</a>
            <a className="et-hero-tab" onClick={() => document.getElementById("contact").scrollIntoView()}>Contact</a>
            <span className="et-hero-tab-slider"></span>
          </div>
        </section>
      </div>
    )
  }
}
