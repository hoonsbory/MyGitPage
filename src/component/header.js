import React, { Component } from 'react'
import '../css/header.scss';

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
      if(count===title.length){
        clearInterval(inter);
        document.getElementById("title").style.borderRight = "unset"
        var inter2 = setInterval(() => {
          this.setState({
            text2 : this.state.text2 + title2[count2]
          })
          count2++;
          if(count2===title2.length){
            clearInterval(inter2);
          }
        }, 150);
      }
    }, 150);
      
  }
  render(){

  //   document.addEventListener('scroll', function() {
  //     console.log(document.getElementsByClassName("mainSec")[0].scrollHeight);
  //     if(window.scrollY>=document.getElementsByClassName("mainSec")[0].scrollHeight-document.getElementsByClassName("mainSec-container")[0].scrollHeight&&document.getElementsByClassName("mainSec-container")[0]){
  //       document.getElementsByClassName("mainSec-container")[0].setAttribute("class","mainSec-container mainSec-container--top")
  //     }else{
  //       document.getElementsByClassName("mainSec-container")[0].setAttribute("class","mainSec-container");
  //     }
  // });
  
    return (
      <div className="header">
        <div className="mainSec-container">
            <a href="#!" className="tab" onClick={() => window.scrollTo(0, 0)}>Home</a>
            <a href="#!" className="tab" onClick={() => document.getElementById("aboutMe").scrollIntoView()}>AboutMe</a>
            <a href="#!" className="tab" onClick={() => document.getElementById("project").scrollIntoView()}>Project</a>
            <a href="#!" className="tab" onClick={() => document.getElementById("skills").scrollIntoView()}>Skills</a>
            <a href="#!" className="tab" onClick={() => document.getElementById("contact").scrollIntoView()}>Contact</a>
            <span className="tab-slider"></span>
          </div>
        <section  className="mainSec">
          <img alt="mypic" src={process.env.PUBLIC_URL + "/images/me3.png"} id="mypic"></img>
          <br></br>
    <h1 id="title">{this.state.text}</h1>
    <br></br>
    <h1 id="title2">{this.state.text2}</h1>
          
        </section>
      </div>
    )
  }
}
