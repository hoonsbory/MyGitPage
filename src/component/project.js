import React, { Component } from 'react'
import Slider from "react-slick";
import '../css/project.css'
import ProjectImg from "./projectImg"

export default class project extends Component {
  state = {
    project : ""
  }
  imageList(projectName){
    this.setState({project : projectName});
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
            customPaging: function(i) {
              return (
                  <img src={process.env.PUBLIC_URL+`/images/abstract0${i + 1}.jpg`} width="40px" height="40px" />
              );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className : "mainSlide"
          };
        return (
            <section style={{background : "white"}} className="et-slide" id="project">
 <div className="skillDiv">
                    <h3 id="skillSub"><span style={{fontSize : "1rem"}}>Projects</span></h3>
                    </div>
                  <ProjectImg project={this.state.project}></ProjectImg>
                 
                <Slider {...settings} >
          <div>
            <img onClick={()=>this.imageList("mask")} className="projectImg" src={process.env.PUBLIC_URL + "/images/abstract01.jpg"} />
            <div id="projectText"><p>프로젝트명 : 마스크팜</p><p>제작기간 : 2020/03/01~2020/03/08</p><p>사용기술 : SpringBoot/Mysql/Docker/</p><p>AWS/JPA/Thymeleaf</p><p>힘든 시기에 도움이 되고 싶어 제작함</p></div>
          </div>
          <div>
          <img onClick={()=>this.imageList("dayoff")} className="projectImg" src={process.env.PUBLIC_URL + "/images/abstract02.jpg"} />
            <div id="projectText"><p>프로젝트명 : 마스크팜</p><p>제작기간 : 2020/03/01~2020/03/08</p><p>사용기술 : SpringBoot/Mysql/Docker/</p><p>AWS/JPA/Thymeleaf</p><p>힘든 시기에 도움이 되고 싶어 제작함</p></div>
          </div>
          <div>
          <img onClick={()=>this.imageList("color")} className="projectImg" src={process.env.PUBLIC_URL + "/images/abstract03.jpg"} />
            <div id="projectText"><p>프로젝트명 : 마스크팜</p><p>제작기간 : 2020/03/01~2020/03/08</p><p>사용기술 : SpringBoot/Mysql/Docker/</p><p>AWS/JPA/Thymeleaf</p><p>힘든 시기에 도움이 되고 싶어 제작함</p></div>
          </div>
        </Slider>
        </section>
        )
    }
}
