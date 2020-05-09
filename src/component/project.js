import React, { Component } from 'react'
import Slider from "react-slick";
import '../css/project.css'
import ProjectImg from "./projectImg"

export default class project extends Component {
  state = {
    project: ""
  }
  imageList(projectName) {
    this.setState({ project: projectName });
    setTimeout(() => {

      document.getElementById("projectImg").style.display = "block";
      document.getElementById("opacityBox").style.display = "block";
      document.getElementById("close").style.display = "block";
      document.getElementsByClassName("mainSlide")[0].getElementsByClassName("slick-arrow")[0].style.display = "none";
      document.getElementsByClassName("mainSlide")[0].getElementsByClassName("slick-arrow")[1].style.display = "none";
    }, 50);

  }

  render() {


    const settings = {
      customPaging: function (i) {
        return (
          <img src={process.env.PUBLIC_URL + `/images/abstract0${i + 1}.jpg`} width="40px" height="40px" />
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "mainSlide"
    };
    return (
      <section style={{ background: "white" }} className="et-slide" id="project">
        <div className="skillDiv">
          <h3 id="skillSub"><span style={{ fontSize: "1rem" }}>Projects</span></h3>
        </div>
        <ProjectImg project={this.state.project}></ProjectImg>

        <Slider {...settings} >
          <div>
            <span>사진더보기</span>
            <img onClick={() => this.imageList("mask")} className="projectImg" src={process.env.PUBLIC_URL + "/images/abstract01.jpg"}></img>
            <div id="projectText"><p><strong>프로젝트명 </strong>- 마스크팜(2인 프로젝트)</p><p><strong>제작기간 </strong>- 2020/03/01~2020/03/08</p>
              <p><strong>사용기술 </strong>- <span>SpringBoot</span><span>MySql</span><span>AWS</span><span>Docker</span><span>Thymeleaf</span>
                <span>JPA</span></p>
              <p><strong>역할</strong>- 기획 및 개발</p>
              <p style={{ marginBottom: "2" }}><strong>설명</strong> -서버에서 받은 공공데이터를 축적 및 가공하여 공적마스크의 평균 입고 
              시간을 제공하며 거리순 입고순 정렬을 통해 편리한 재고 검색이 가능하게 했습니다.</p>
              <p style={{ marginTop: "2" }}>힘든 시기에 조금이나마 도움이 되고 싶어 제작하게 되었습니다.</p>
              <p style={{display : "inline"}}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/maskMap"><img src={process.env.PUBLIC_URL+"/images/github.png"} style={{display : "inline"}} width="30px" height="30px"></img></a><p style={{marginRight: "0",display : "inline",fontWeight : "600", fontSize : "15px"}}>&</p><a href="https://mask-pharm.shop"><img src={process.env.PUBLIC_URL+"/images/favicon.png"} style={{display : "inline"}} width="30px" height="30px"></img></a></div>
          </div>
          <div>
            <img onClick={() => this.imageList("dayoff")} className="projectImg" src={process.env.PUBLIC_URL + "/images/abstract02.jpg"} />
            <div id="projectText"><p>프로젝트명 : 마스크팜</p><p>제작기간 : 2020/03/01~2020/03/08</p><p>사용기술 : SpringBoot/Mysql/Docker/</p><p>AWS/JPA/Thymeleaf</p><p>힘든 시기에 도움이 되고 싶어 제작함</p></div>
          </div>
          <div>
            <img onClick={() => this.imageList("color")} className="projectImg" src={process.env.PUBLIC_URL + "/images/abstract03.jpg"} />
            <div id="projectText"><p>프로젝트명 : 마스크팜</p><p>제작기간 : 2020/03/01~2020/03/08</p><p>사용기술 : SpringBoot/Mysql/Docker/</p><p>AWS/JPA/Thymeleaf</p><p>힘든 시기에 도움이 되고 싶어 제작함</p></div>
          </div>
        </Slider>
      </section>
    )
  }
}
