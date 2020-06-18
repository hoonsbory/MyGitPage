import React from 'react'
import '../css/aboutMe.scss';

const AboutMe = () => {
    window.addEventListener('scroll', function () {
        if (this.document.getElementById('aboutMe').clientHeight / 1.7 < this.window.scrollY) {
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
                    <div id="aboutmeCom"><p id="firstp">같이 일하고 싶은,</p> <p>같이 있고 싶은 개발자</p></div>
                </div>
                <div id="right">
                    <div id="aboutmeText"><div id="subTitle"><h3>함께 하고 싶은 사람</h3></div>
                        <p><strong>기획부터 프론트,백엔드</strong>까지 관심이 많아 풀스택 개발자가 되는 것이 목표입니다.</p>
                        <p>두루 실력을 갖춘 개발자를 넘어서, 함께 성장할 수 있는 <strong>좋은 팀원이자 친구</strong> 같은 개발자가 되려합니다.</p>
                        <p>때로는 친구처럼, 때로는 듬직한 파트너로써</p>
                        <p><strong>코드 그 이상의 가치</strong>를 공유할 수 있는 개발자가 되어 선한 영향력을 끼치고 싶습니다.</p>
                    </div>
                </div>
            </section>
    )
}

export default AboutMe
