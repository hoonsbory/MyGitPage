import React, { Component } from 'react'
import '../css/header.css';


export default class header extends Component {
  state = {
    text : "",
    text2 : ""
  }
  async componentDidMount(){
    var title = "풀스택 개발자를 꿈꾸는"
    var title2 = "신입개발자 신재훈입니다"
    var count = 0;
    var count2 = 0;
    var inter =  setInterval(() => {
      this.setState({
        text : this.state.text + title[count]
      })
      count++;
      if(count==title.length){
        clearInterval(inter);
        document.getElementById("title").style.borderRight = "unset"
        var inter2 = setInterval(() => {
          this.setState({
            text2 : this.state.text2 + title2[count2]
          })
          count2++;
          if(count2==title2.length){
            clearInterval(inter2);
          }
        }, 150);
      }
    }, 150);
      
  }
  render(){

  //   document.addEventListener('scroll', function() {
  //     console.log(document.getElementsByClassName("et-hero-tabs")[0].scrollHeight);
  //     if(window.scrollY>=document.getElementsByClassName("et-hero-tabs")[0].scrollHeight-document.getElementsByClassName("et-hero-tabs-container")[0].scrollHeight&&document.getElementsByClassName("et-hero-tabs-container")[0]){
  //       document.getElementsByClassName("et-hero-tabs-container")[0].setAttribute("class","et-hero-tabs-container et-hero-tabs-container--top")
  //     }else{
  //       document.getElementsByClassName("et-hero-tabs-container")[0].setAttribute("class","et-hero-tabs-container");
  //     }
  // });
  
    return (
      <div className="header">
        <section id="fuck" className="et-hero-tabs">
          <img src={process.env.PUBLIC_URL + "/images/me.png"} id="mypic"></img>
          <br></br>
    <h1 id="title">{this.state.text}</h1>
    <br></br>
    <h1 id="title2">{this.state.text2}</h1>
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
