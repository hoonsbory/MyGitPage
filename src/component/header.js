import React, { useState, useEffect } from 'react'
import '../css/header.scss';
const Header = () => {

  const [text, setText] = useState("")
  const [text2, setText2] = useState("")

  useEffect(() => {
    //componentDidMount에서는 setstate가 즉각 변경되면서 문자열이 잘더해졌는데, hooks를 사용하니 변경된 내용이 useEffect에서 바로 적용이 안된다.
    //html태그에서는 state값이 변경되면서 잘찍히지만 useEffect내에서는 변경내용이 반영이 안된다. 이유는 모르겠음,,
    var title = "풀스택 개발자를 꿈꾸는"
    var title2 = "신입개발자 신재훈입니다"
    var count = 0;
    var content = "";
    var inter = setInterval(() => {
      content = content + title[count]
      setText(content)
      count++;
      if (count === title.length) {
        count = 0;
        content = "";
        clearInterval(inter);
        document.getElementById("title").style.borderRight = "unset"
        var inter2 = setInterval(async () => {
          content = content + title2[count]
          setText2(content)
          count++;
          if (count === title2.length) {
            clearInterval(inter2);
          }
        }, 150);
      }
    }, 150);

  }, [])
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
      <section className="mainSec">
        <img alt="mypic" src="/MyGitPage/images/me3.png" id="mypic"></img>
        <br></br>
        <h1 id="title">{text}</h1>
        <br></br>
        <h1 id="title2">{text2}</h1>

      </section>
    </div>
  )
}

export default Header
