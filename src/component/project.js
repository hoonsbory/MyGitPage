import React, { useState } from 'react'
import Slider from "react-slick";
import '../css/project.scss'
import ProjectImg from "./projectImg"

const Project = () => {

  const [project , setProject] = useState("")

  const imageList = (projectName) => {
    setProject(projectName)
    setTimeout(() => {
      document.getElementById("projectImg").style.display = "block";
      document.getElementById("opacityBox").style.display = "block";
      document.getElementById("close").style.display = "block";
      document.getElementsByClassName("mainSlide")[0].getElementsByClassName("slick-arrow")[0].style.display = "none";
      document.getElementsByClassName("mainSlide")[0].getElementsByClassName("slick-arrow")[1].style.display = "none";
    }, 50);
  }

  const settings = {
    customPaging: function (i) {
      return (
        <img alt="previewImg" src={`/MyGitPage/images/abstract0${i + 1}.jpg`} width="40px" height="40px" />
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
    <ProjectImg project={project}></ProjectImg>

    <Slider {...settings} >
      <div>
        <img alt="listBtnImg" onClick={() => imageList("mask")} src={"/MyGitPage/images/interface.png"} className="imgList"></img>
        <img alt="projectImg" className="projectImg" src={"/MyGitPage/images/abstract01.jpg"}></img>
        <div id="projectText"><p><strong>프로젝트명 </strong>- 마스크팜(2인 프로젝트)</p><p><strong>제작기간 </strong>- 2020/03/01~2020/03/08</p>
          <p><strong>사용기술 </strong>- <span>SpringBoot</span><span>MySql</span><span>AWS</span><span>Docker</span><span>Thymeleaf</span>
            <span>JPA</span><span>Nginx</span></p>
          <p><strong>역할</strong>- 전체기획 및 개발</p>
          <p style={{ marginBottom: "0" }}><strong>설명</strong> -서버에서 받은 공공데이터를 축적 및 가공하여 공적마스크의 평균 입고
          시간을 제공하며 거리순 입고순 정렬을 통해 편리한 재고 검색이 가능하게 했습니다. <br></br>
          힘든 시기에 조금이나마 도움이 되고 싶어 제작하게 되었습니다.</p>
          <p>※ 7월 12일부로 공적마스크 제도가 종료되어 더 이상 api를 통해 데이터를 받아오지 않습니다.</p>
          <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/maskMap">
            <img alt="githubImg" src={"/MyGitPage/images/github.png"}></img>
          </a><p id="betweenP" >&</p><a href="https://mask-pharm.shop">
            <img alt="siteImg" src={"/MyGitPage/images/favicon.png"}></img></a></div>
      </div>
      <div>
        <img alt="listBtnImg" onClick={() => imageList("personalColor")} src={"/MyGitPage/images/interface.png"} className="imgList"></img>
        <img alt="projectImg" className="projectImg" src={"/MyGitPage/images/abstract02.jpg"} />
        <div id="projectText"><p><strong>프로젝트명 </strong>- 퍼스널컬러 진단(2인 프로젝트)</p><p><strong>제작기간 </strong>- 2020/05/01~2020/06/01</p>
          <p><strong>사용기술 </strong>- <span>React</span><span>AWS S3</span><span>CloudFront</span><span>Travis CI</span></p>
          <p><strong>역할</strong>- 기획 및 전체개발</p>
          <p style={{ marginBottom: "0" }}><strong>설명</strong> -비디오태그의 스트림을 이용해 유저의 피부를 캡쳐 및 분석하여 퍼스널컬러를 알려주는 웹사이트입니다. <br/> 스트림을 지원하지 않는 브라우저는 input으로 사진을 업로드 하게 하였고 피부를 정확히 특정하기 위해 크롭툴을 만들었습니다.</p>
          <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/simkong">
            <img alt="githubImg" src={"/MyGitPage/images/github.png"}></img>
          </a><p id="betweenP" >&</p><a href="https://mycolor.kr">
            <img alt="siteImg" src={"/MyGitPage/images/mycolor.png"}></img></a></div>
      </div>
      <div>
        <img alt="listBtnImg" onClick={() => imageList("dayoff")} src={"/MyGitPage/images/interface.png"} className="imgList"></img>
        <img alt="projectImg" className="projectImg" src={"/MyGitPage/images/abstract03.jpg"} />
        <div id="projectText"><p><strong>프로젝트명 </strong>- DayOff(5인 프로젝트)</p><p><strong>제작기간 </strong>- 2019/12/01~2020/01/10</p>
          <p><strong>사용기술 </strong>- <span>SpringBoot</span><span>MySql</span><span>AWS</span><span>React</span><span>SpringSecurity</span>
            <span>JPA</span><span>GCP(Storage,visionApi)</span><span>Nginx</span></p>
          <p><strong>역할</strong>- SpringSecurity Login(Oauth2-Google,Facebook),DB설계 및 Entity Mapping, 결제관리(admin,user),최근 본 상품 및 조회중인 상품과 구매연결이 높은 제품 추천, Vision Api(인공지능)와 Storage를 활용한 유사 상품 검색,kakao Pay(환불),서버 배포 및 https 적용(이 부분은 프로젝트 종료 후 혼자 진행한 부분입니다.)</p>
          <p style={{ marginBottom: "0" }}><strong>설명</strong> -여성의류 쇼핑몰로 최대한 많은 부분을 구현하려 했고, 차별화를 주기 위하여 인공지능 상품검색 기능을 추가하였습니다.
          </p>
          <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/dayoffProject">
            <img alt="githubImg" src={"/MyGitPage/images/github.png"}></img>
          </a><p id="betweenP" >&</p><a href="https://jaehoon-dayoff.ml">
            <img alt="siteImg" src={"/MyGitPage/images/dayoff.png"}></img></a></div>
      </div>

      <div>
        <img alt="listBtnImg" onClick={() => imageList("insta")} src={"/MyGitPage/images/interface.png"} className="imgList"></img>
        <img alt="projectImg" className="projectImg" src={"/MyGitPage/images/abstract04.jpg"} />
        <div id="projectText"><p><strong>프로젝트명 </strong>- 인스타그램 클론(5인 프로젝트)</p><p><strong>제작기간 </strong>- 2019/09/01~2019/09/09</p>
          <p><strong>사용기술 </strong>- <span>JSP</span><span>ORACLE DB</span><span>Tomcat</span><span>Servlet</span></p>
          <p><strong>역할</strong>- 게시글 등록, 본인페이지,타유저페이지, DB설계, 좋아요 팔로우 내역, 팔로우 및 팔로워 리스트, 사용자검색,로그인 CSS</p>
          <p style={{ marginBottom: "0" }}><strong>설명</strong> -학원에서 처음 JDBC와 JSP,AJAX를 배웠을 당시 진행한 미니 프로젝트로 인스타그램을 클론했습니다.
          </p>
          <p style={{ display: "inline" }}><strong>깃허브 </strong> -</p><a href="https://github.com/hoonsbory/instaProject">
            <img alt="githubImg" src={"/MyGitPage/images/github.png"}></img>
          </a></div>
      </div>
    </Slider>
  </section>
  )
}

export default Project
