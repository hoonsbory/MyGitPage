import React, { Component } from 'react'
import '../css/aboutMe.css';
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
export default class aboutMe extends Component {
    render() {
            window.addEventListener('scroll', function () {
                if (this.document.getElementById('aboutMe').clientHeight / 2 < this.window.scrollY) {
                    if (this.window.screen.width < 768) {
                        this.document.getElementById("left").style.display = "block";
                        this.document.getElementById("left").style.animation = "fadein3 1.5s"
                        this.document.getElementById("right").style.display = "block";
                        this.document.getElementById("right").style.animation = "fadein3 1.5s"
                    } else {
                        this.document.getElementById("left").style.display = "block";
                        this.document.getElementById("left").style.animation = "fadein2 1.5s"
                        this.document.getElementById("right").style.display = "block";
                        this.document.getElementById("right").style.animation = "fadein2 1.5s"
                    }
                }
            })
        return (
            <section className="et-slide" id="aboutMe">
                <div className="skillDiv">
                    <h3 id="skillSub"><span style={{ fontSize: "1rem" }}>AboutMe</span></h3>
                </div>
                <div id="left">
                    <div id="aboutmeCom"><p id="firstp">함께하고싶은 개발자</p> <p>믿을 수 있는 개발자</p></div>
                </div>
                <div id="right">
                    <div id="aboutmeText"><div id="subTitle"><h3>Introduce</h3></div><p>비전공자 출신으로 국비교육을 통해 웹개발을 배웠습니다. </p>

                        <p>대단한 실력을 갖춘 개발자도 좋지만 , 함께 성장할 수 있는 좋은 팀원이자 파트너로서의 성장을 꿈꿉니다.</p>
                        <p>코드 그 이상의 가치를 함께 공유할 수 있는 그런 개발자가 되어 선한 영향력을 끼치고 싶습니다.</p>
                    </div>
                </div>
                {/* <img src={process.env.PUBLIC_URL + "/images/com.png"} width="300vw" height="200vh"></img> */}
            </section>
        )
    }
}
