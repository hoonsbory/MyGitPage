import React, { Component } from 'react'
import '../css/aboutMe.css';
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
export default class aboutMe extends Component {
    render() {
        var keyframe = 
        window.addEventListener('scroll', function () {
            if (200 < this.window.scrollY) {
                this.document.getElementById("aboutmeCom").style.display = "block";
                this.document.getElementById("aboutmeCom").style.animation = "fadein2 1s"
                this.document.getElementById("aboutmeText").style.display = "block";
                this.document.getElementById("aboutmeText").style.animation = "fadein2 1s"
            }
        })
        return (
            <section className="et-slide" id="aboutMe">
                <div id="aboutmeCom"><p id="firstp">누구나 함께하고싶은</p> <p>사람냄새나는 개발자</p></div>
                <div id="aboutmeText"><h1>About</h1><p>비전공자 출신으로 국비교육을 통해 웹개발을 배웠습니다. 잘하는 개발자를 넘어서 함께 멋진 결과를 만들어낼 수 있는 좋은 팀원이 되고 싶습니다. </p></div>
                {/* <img src={process.env.PUBLIC_URL + "/images/com.png"} width="300vw" height="200vh"></img> */}
            </section>
        )
    }
}
