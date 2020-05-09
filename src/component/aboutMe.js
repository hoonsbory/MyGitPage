import React, { Component } from 'react'
import '../css/aboutMe.scss';
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
export default class aboutMe extends Component {
    render() {
            window.addEventListener('scroll', function () {
                if (this.document.getElementById('aboutMe').clientHeight / 1.7 < this.window.scrollY) {
                    console.log(window.innerWidth);
                    if (this.window.innerWidth < 768) {
                        this.document.getElementById("left").style.visibility = "visible";
                        this.document.getElementById("left").style.animation = "fadein3 1.5s"
                        this.document.getElementById("right").style.visibility = "visible";
                        this.document.getElementById("right").style.animation = "fadein3 1.5s"
                    } else {
                        this.document.getElementById("left").style.visibility = "visible";
                        this.document.getElementById("left").style.animation = "fadein2 1.5s"
                        this.document.getElementById("right").style.visibility = "visible";
                        this.document.getElementById("right").style.animation = "fadein2 1.5s"
                    }
                }
            })
        return (
            <section className="slide" id="aboutMe">
                <div className="titleDiv">
                    <h3 id="titleSub"><span style={{ fontSize: "1rem" }}>AboutMe</span></h3>
                </div>
                <div id="left">
                    <div id="aboutmeCom"><p id="firstp">같이 일하고 싶은 개발자</p> <p>같이 놀고 싶은 개발자</p></div>
                </div>
                <div id="right">
                    <div id="aboutmeText"><div id="subTitle"><h3>함께 하고 싶은 사람</h3></div><p>비전공자 출신으로 국비교육을 통해 웹개발을 배웠습니다. </p>
                        <p>훌륭한 실력을 갖춘 개발자도 좋지만, 함께 성장할 수 있는 좋은 팀원이자 친구 같은 개발자야말로 좋은 개발자라고 생각합니다.</p>
                        <p>때로는 친구처럼, 때로는 듬직한 파트너로써</p>
                        <p>코드 그 이상의 가치를 공유할 수 있는 개발자가 되어 선한 영향력을 끼치고 싶습니다.</p>
                    </div>
                </div>
                {/* <img src={process.env.PUBLIC_URL + "/images/com.png"} width="300vw" height="200vh"></img> */}
            </section>
        )
    }
}
