import React, { useState } from 'react'
import Slider from "react-slick";
import '../css/project.scss'
import ProjectImg from "./projectImg"

const Project = () => {
  window.addEventListener('scroll', function () {
    if (document.getElementById("aboutMe").scrollHeight + 200 < window.scrollY) {
        document.getElementById("project").style.marginTop = 0
        document.getElementById("project").style.opacity = 1
    }
})
  const [project, setProject] = useState("")
  const [length, setLength] = useState([])

  const imageList = (projectName,leng) => {
    setProject(projectName)
    var arr = new Array(leng)
    arr.fill(0)
    setLength([...arr])
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
      <div className="titleDiv" >
        <h3 id="titleSub"><span style={{ fontSize: "1rem" }}>Projects</span></h3>
      </div>
      <ProjectImg project={project} length={length}></ProjectImg>

      <Slider {...settings} style={{ fontSize: "15px" }} >
      <div>
          <img alt="listBtnImg" onClick={() => imageList("lotto",4)} src={`${process.env.PUBLIC_URL}/images/interface.png`} className="imgList"></img>
          <img alt="projectImg" className="projectImg" src={`${process.env.PUBLIC_URL}/images/abstract01.jpg`}></img>
          <div id="projectText"><p><strong>프로젝트명 </strong>- 로또맛집(가상로또 및 통계)</p>
            <p><strong>사용기술 </strong>- <span>React</span><span>Redux</span><span>TypeScript</span><span>Styled-Component</span><span>Graphql</span>
            <span>MongoDB</span><span>Express</span><span>Heroku</span></p>
            <p><strong>역할</strong>- 전체기획 및 개발</p>
            <div style={{ marginBottom: "0" }}><strong>설명</strong> - 가상로또 추첨과 로또 데이터를 가공한 그래프를 제공하는 웹사이트입니다.
            <p>State관리는 Redux로 했으며, 재활용성이 높은 컴포넌트 등은 styled component로 커스텀하여 확장성을 높였습니다. </p>
            <p>서버는 Graphql-yoga에 내장되어 있는 Express를 사용했습니다. MongoDB의 Schema를 Graphql에 정의하여  함께 사용했습니다.</p>
            <p>실제 로또 데이터 수집은 node-cron과 cheerio를 활용하여 크롤링했고, 수집한 데이터는 ChartJS를 커스텀하여 시각화했습니다. </p>
            모바일 친화적으로 설계했으며 리스트가 있는 섹션은 스크롤 페이징 처리했습니다. 
            <p>웹뷰앱으로 출시했으며, 별도로 QR코드 스캔 기능을 추가했습니다.</p>
            </div>
            <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/lotto-ts-react">
              <img alt="githubImg" src={`${process.env.PUBLIC_URL}/images/github.png`}></img>(Front) /
            </a>
            <a href="https://github.com/hoonsbory/lotto-server-public">
              <img alt="githubImg" src={`${process.env.PUBLIC_URL}/images/github.png`}></img>(Back)
            </a>
            <p id="betweenP" >&</p><a href="https://lottozip.site">
            <img alt="siteImg" src={`${process.env.PUBLIC_URL}/images/lottoIcon.svg`}></img></a></div>
        </div>
        <div>
          <img alt="listBtnImg" onClick={() => imageList("board",5)} src={`${process.env.PUBLIC_URL}/images/interface.png`} className="imgList"></img>
          <img alt="projectImg" className="projectImg" src={`${process.env.PUBLIC_URL}/images/abstract02.jpg`}></img>
          <div id="projectText"><p><strong>프로젝트명 </strong>- SPA 게시판</p>
            <p><strong>사용기술 </strong>- <span>Express</span><span>React</span><span>AWS S3</span><span>AWS EC2</span><span>Nginx</span><span>Mysql</span>
              <span>Sequelize</span><span>Redux</span><span>Passport</span></p>
            <p><strong>역할</strong>- 전체기획 및 개발</p>
            <p style={{ marginBottom: "0" }}><strong>설명</strong> - 전체적인 기능이 담겨있는 SPA 게시판입니다. <br></br>
          로그인, 좋아요, 댓글, 댓글 좋아요, 답글 등등 기본적인 기능을 모두 갖추었습니다.</p>
            <p>특히 사진업로드 같은 경우 직접 커스텀해서 커서가 어떤 위치에 놓여도 완벽하게 대응하며, 불필요한 s3 요청이 없게 로직을 짰습니다.</p>
            <p>코드블럭은 highlight.js를 통해 구현했고, 모바일은 무한스크롤, pc는 숫자로 페이징했습니다. 모바일의 무한스크롤은 react-virtualized를 통해서 속도를 높였습니다.</p>
            <p>SEO 최적화를 위해 REACT HELMET을 사용했고 게시글 페이지만 서버에서 메타태그를 변경하게 했습니다.</p>
            <p>Nginx를 통해 로드밸런싱을 구현했고, http 요청은 https로 Redirect 시켰습니다.</p>
            <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/hoonBoard">
              <img alt="githubImg" src={`${process.env.PUBLIC_URL}/images/github.png`}></img>
            </a><p id="betweenP" >&</p><a href="https://hoondevnote.ml">
              <img alt="siteImg" src={`${process.env.PUBLIC_URL}/images/board.png`}></img></a></div>
        </div>
        
        <div>
          <img alt="listBtnImg" onClick={() => imageList("mask",3)} src={`${process.env.PUBLIC_URL}/images/interface.png`} className="imgList"></img>
          <img alt="projectImg" className="projectImg" src={`${process.env.PUBLIC_URL}/images/abstract03.jpg`}></img>
          <div id="projectText"><p><strong>프로젝트명 </strong>- 마스크팜(2인 프로젝트)</p>
            <p><strong>사용기술 </strong>- <span>SpringBoot</span><span>MySql</span><span>AWS</span><span>Docker</span><span>Thymeleaf</span>
              <span>JPA</span><span>Nginx</span><span>Travis CI</span><span>JQuery</span></p>
            <p><strong>역할</strong>- 전체기획 및 개발</p>
            <p style={{ marginBottom: "0" }}><strong>설명</strong> -서버에서 받은 공공데이터를 축적 및 가공하여 공적마스크의 평균 입고
          시간을 제공하며 거리순 입고순 정렬을 통해 편리한 재고 검색이 가능하게 했습니다. </p><br></br>
            <p>Nginx를 통해 도커 컨테이너 2개를 로드밸런싱해주었습니다.</p>
            <p>Travis CI를 통해 빌드 후 s3에 업로드하고, aws code deploy를 통해 ec2에 배포하는 파이프라인을 구축했습니다.</p>
            <p>사용자가 끊김없이 이용할 수 있게 배포 시 쉘스크립트를 통해 컨테이너를 하나씩 재실행시켰습니다.</p>
            <p>crontab을 이용하여 매일 새벽 data를 수집하여 평균 입고 시간을 계산 후 DB에 insert해주어 더 편하게 입고시간을 알 수 있습니다.</p>
            <br></br>
            <p>※ 7월 12일부로 공적마스크 제도가 종료되어 더 이상 api를 통해 데이터를 받아오지 않습니다.</p>
            <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/maskMap">
              <img alt="githubImg" src={`${process.env.PUBLIC_URL}/images/github.png`}></img>
            </a><p id="betweenP" >&</p><a href="https://mask-pharm.shop">
              <img alt="siteImg" src={`${process.env.PUBLIC_URL}/images/favicon.png`}></img></a></div>
        </div> 
        <div>
          <img alt="listBtnImg" onClick={() => imageList("personalColor",3)} src={`${process.env.PUBLIC_URL}/images/interface.png`} className="imgList"></img>
          <img alt="projectImg" className="projectImg" src={`${process.env.PUBLIC_URL}/images/abstract04.jpg`} />
          <div id="projectText"><p><strong>프로젝트명 </strong>- 퍼스널컬러 진단(2인 프로젝트)</p>
            <p><strong>사용기술 </strong>- <span>React</span><span>AWS S3</span><span>CloudFront</span><span>Jenkins</span><span>JQuery</span></p>
            <p><strong>역할</strong>- 기획 및 전체개발</p>
            <p style={{ marginBottom: "0" }}><strong>설명</strong> -비디오태그의 스트림을 이용해 유저의 피부를 캡쳐 및 분석하여 퍼스널컬러를 알려주는 웹사이트입니다. <br /> 스트림을 지원하지 않는 브라우저는 input으로 사진을 업로드 하게 하였고 피부를 정확히 특정하기 위해 캔버스를 이용하여 크롭툴을 만들었습니다.</p>
            <p>SEO최적화를 위해 react-snap을 사용하여 html을 분리했습니다.</p>
            <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/simkong">
              <img alt="githubImg" src={`${process.env.PUBLIC_URL}/images/github.png`}></img>
            </a><p id="betweenP" >&</p><a href="https://mycolor.kr">
              <img alt="siteImg" src={`${process.env.PUBLIC_URL}/images/mycolor.png`}></img></a></div>
        </div>
        <div>
          <img alt="listBtnImg" onClick={() => imageList("dayoff",3)} src={`${process.env.PUBLIC_URL}/images/interface.png`} className="imgList"></img>
          <img alt="projectImg" className="projectImg" src={`${process.env.PUBLIC_URL}/images/abstract05.jpg`} />
          <div id="projectText"><p><strong>프로젝트명 </strong>- DayOff(5인 프로젝트)</p>
            <p><strong>사용기술 </strong>- <span>SpringBoot</span><span>MySql</span><span>AWS</span><span>React</span><span>SpringSecurity</span>
              <span>JPA</span><span>GCP(Storage,visionApi)</span><span>Nginx</span></p>
            <p><strong>역할</strong>- SpringSecurity Login(Oauth2-Google,Facebook),DB설계 및 Entity Mapping, 결제관리(admin,user),최근 본 상품 및 조회중인 상품과 구매연결이 높은 제품 추천, Vision Api(인공지능)와 Storage를 활용한 유사 상품 검색,kakao Pay(환불),서버 배포 및 https 적용(이 부분은 프로젝트 종료 후 혼자 진행한 부분입니다.)</p>
            <p style={{ marginBottom: "0" }}><strong>설명</strong> -여성의류 쇼핑몰로 최대한 많은 부분을 구현하려 했고, 차별화를 주기 위하여 인공지능 상품검색 기능을 추가하였습니다.
          </p>
            <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트</strong> -</p><a href="https://github.com/hoonsbory/dayoffProject">
              <img alt="githubImg" src={`${process.env.PUBLIC_URL}/images/github.png`}></img>
            </a><p id="betweenP" >&</p><a href="https://jaehoon-dayoff.ml">
              <img alt="siteImg" src={`${process.env.PUBLIC_URL}/images/dayoff.png`}></img></a></div>
        </div>

        <div>
          <img alt="listBtnImg" onClick={() => imageList("insta",3)} src={`${process.env.PUBLIC_URL}/images/interface.png`} className="imgList"></img>
          <img alt="projectImg" className="projectImg" src={`${process.env.PUBLIC_URL}/images/abstract06.jpg`} />
          <div id="projectText"><p><strong>프로젝트명 </strong>- 인스타그램 클론(5인 프로젝트)</p>
            <p><strong>사용기술 </strong>- <span>JSP</span><span>ORACLE DB</span><span>Tomcat</span><span>Servlet</span></p>
            <p><strong>역할</strong>- 게시글 등록, 본인페이지,타유저페이지, DB설계, 좋아요 팔로우 내역, 팔로우 및 팔로워 리스트, 사용자검색,로그인 CSS</p>
            <p style={{ marginBottom: "0" }}><strong>설명</strong> -학원에서 처음 JDBC와 JSP,AJAX를 배웠을 당시 진행한 미니 프로젝트로 인스타그램을 클론했습니다.
          </p>
            <p style={{ display: "inline" }}><strong>깃허브 </strong> -</p><a href="https://github.com/hoonsbory/instaProject">
              <img alt="githubImg" src={`${process.env.PUBLIC_URL}/images/github.png`}></img>
            </a></div>
        </div>
      </Slider>
    </section>
  )
}

export default Project
