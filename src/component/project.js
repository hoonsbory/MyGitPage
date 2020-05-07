import React, { Component } from 'react'
import Slider from "react-slick";
import '../css/project.css'

export default class project extends Component {
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
            slidesToScroll: 1
          };
          console.log(document.getElementsByClassName("slick-dots")[0]);
        return (
            <section className="et-slide" id="project">
                <Slider {...settings} >
          <div>
            <img style={{display : "inline"}} src={process.env.PUBLIC_URL + "/images/abstract01.jpg"} width="300px"/>
            <div style={{background: "white", display : 'inline-block', textAlign : "left", paddingLeft : "3%"}}><p>프로젝트명 : 마스크팜</p><p>제작기간 : 2020/03/01~2020/03/08</p><p>사용기술 : SpringBoot/Mysql/Docker/AWS/JPA/Thymeleaf</p><p>힘든 시기에 도움이 되고 싶어 제작함</p><br></br><br></br><br></br><br></br></div>
          </div>
          <div>
          </div>
          <div>
          </div>
        </Slider>
        </section>
        )
    }
}
