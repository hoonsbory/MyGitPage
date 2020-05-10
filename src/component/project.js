import React, { Component } from 'react'
import Slider from "react-slick";
import '../css/project.scss'
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
    window.addEventListener('scroll', function () {
      if (document.getElementById("aboutMe").scrollHeight + 200 < this.window.scrollY) {

        document.getElementsByClassName("slick-slider")[1].style.visibility = "visible";
        document.getElementsByClassName("slick-slider")[1].style.animation = "fadein3 1.5s"

      }
    })

    const settings = {
      customPaging: function (i) {
        return (
          <img alt="previewImg" src={process.env.PUBLIC_URL + `/images/abstract0${i + 1}.jpg`} width="40px" height="40px" />
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
      <section style={{ background: "white" }} className="slide" id="project">
        <div className="titleDiv">
          <h3 id="titleSub"><span style={{ fontSize: "1rem" }}>Projects</span></h3>
        </div>
        <ProjectImg project={this.state.project}></ProjectImg>

        <Slider {...settings} >
          <div>
            <img alt="listBtnImg" onClick={() => this.imageList("mask")} src={process.env.PUBLIC_URL + "/images/interface.png"} className="imgList"></img>
            <img alt="projectImg" className="projectImg" src={process.env.PUBLIC_URL + "/images/abstract01.jpg"}></img>
            <div id="projectText"><p><strong>프로젝트명 </strong>- 마스크팜(2인 프로젝트)</p><p><strong>제작기간 </strong>- 2020/03/01~2020/03/08</p>
              <p><strong>사용기술 </strong>- <span>SpringBoot</span><span>MySql</span><span>AWS</span><span>Docker</span><span>Thymeleaf</span>
                <span>JPA</span><span>Nginx</span></p>
              <p><strong>역할</strong>- 기획 및 개발</p>
              <p style={{ marginBottom: "0" }}><strong>설명</strong> -서버에서 받은 공공데이터를 축적 및 가공하여 공적마스크의 평균 입고
              시간을 제공하며 거리순 입고순 정렬을 통해 편리한 재고 검색이 가능하게 했습니다. <br></br>
              힘든 시기에 조금이나마 도움이 되고 싶어 제작하게 되었습니다.</p>
              <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/maskMap">
                <img alt="githubImg" src={process.env.PUBLIC_URL + "/images/github.png"}></img>
              </a><p id="betweenP" >&</p><a href="https://mask-pharm.shop">
                <img alt="siteImg" src={process.env.PUBLIC_URL + "/images/favicon.png"}></img></a></div>
          </div>
          <div>
            <img alt="listBtnImg" onClick={() => this.imageList("color")} src={process.env.PUBLIC_URL + "/images/interface.png"} className="imgList"></img>
            <img alt="projectImg" className="projectImg" src={process.env.PUBLIC_URL + "/images/abstract02.jpg"} />
            <div id="projectText"><p><strong>프로젝트명 </strong>- 퍼스널컬러 진단(2인 프로젝트)</p><p><strong>제작기간 </strong>- 2020/03/01~2020/03/08</p>
              <p><strong>사용기술 </strong>- <span>SpringBoot</span><span>MySql</span><span>AWS</span><span>Docker</span><span>Thymeleaf</span>
                <span>JPA</span></p>
              <p><strong>역할</strong>- 기획 및 개발</p>
              <p style={{ marginBottom: "0" }}><strong>설명</strong> -서버에서 받은 공공데이터를 축적 및 가공하여 공적마스크의 평균 입고
              시간을 제공하며 거리순 입고순 정렬을 통해 편리한 재고 검색이 가능하게 했습니다. <br></br>
              힘든 시기에 조금이나마 도움이 되고 싶어 제작하게 되었습니다.</p>
              <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/maskMap">
                <img alt="githubImg" src={process.env.PUBLIC_URL + "/images/github.png"}></img>
              </a><p id="betweenP" >&</p><a href="https://mask-pharm.shop">
                <img alt="siteImg" src={process.env.PUBLIC_URL + "/images/favicon.png"}></img></a></div>
          </div>
          <div>
            <img alt="listBtnImg" onClick={() => this.imageList("dayoff")} src={process.env.PUBLIC_URL + "/images/interface.png"} className="imgList"></img>
            <img alt="projectImg" className="projectImg" src={process.env.PUBLIC_URL + "/images/abstract03.jpg"} />
            <div id="projectText"><p><strong>프로젝트명 </strong>- DayOff(5인 프로젝트)</p><p><strong>제작기간 </strong>- 2019/12/01~2020/01/10</p>
              <p><strong>사용기술 </strong>- <span>SpringBoot</span><span>MySql</span><span>AWS</span><span>React</span><span>SpringSecurity</span>
                <span>JPA</span><span>GCP(Storage,visionApi)</span><span>Nginx</span></p>
              <p><strong>역할</strong>- SpringSecurity Login(Oauth2-Google,Facebook),DB설계 및 Entity Mapping, 결제관리(admin,user),최근 본 상품 및 조회중인 상품과 구매연결이 높은 제품 추천, Vision Api(인공지능)와 Storage를 활용한 유사 상품 검색,kakao Pay(환불),서버 배포 및 https 적용(이 부분은 프로젝트 종료 후 혼자 진행한 부분입니다.)</p>
              <p style={{ marginBottom: "0" }}><strong>설명</strong> -여성의류 쇼핑몰로 최대한 많은 부분을 구현하려 했고, 차별화를 주기 위하여 인공지능 상품검색 기능을 추가하였습니다.
              </p>
              <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/dayoffProject">
                <img alt="githubImg" src={process.env.PUBLIC_URL + "/images/github.png"}></img>
              </a><p id="betweenP" >&</p><a href="https://jaehoon-dayoff.ml">
                <img alt="siteImg" src={process.env.PUBLIC_URL + "/images/dayoff.png"}></img></a></div>
          </div>
        </Slider>
      </section>
    )
  }
}
