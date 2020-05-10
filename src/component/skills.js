import React, { Component } from 'react'
import "../css/skills.scss"
import BeautyStars from 'beauty-stars';
export default class skills extends Component {
    render() {
        window.addEventListener('scroll', function () {
            if (document.getElementById("aboutMe").scrollHeight + document.getElementById("project").scrollHeight + 200 < this.window.scrollY) {
                console.log(document.getElementsByClassName("skillDiv")[0]);
              document.getElementsByClassName("skillDiv")[0].style.visibility = "visible";
              document.getElementsByClassName("skillDiv")[0].style.animation = "fadein3 1.5s"
              document.getElementsByClassName("skillDiv")[1].style.visibility = "visible";
              document.getElementsByClassName("skillDiv")[1].style.animation = "fadein3 1.5s"
              document.getElementsByClassName("skillDiv")[2].style.visibility = "visible";
              document.getElementsByClassName("skillDiv")[2].style.animation = "fadein3 1.5s"
      
            }
          })
        return (
            <section className="slide" id="skills">
                <div className="skillDiv">
                    <h1>Skills</h1>
                    <h3 id="skillSub"><span>Back-end</span></h3>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/java.png"}></img>
                        <p>JAVA</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/jpa.png"}></img>
                        <p>JPA</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/spring.png"}></img>
                        <p>SpringBoot</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                </div>
                <div className="skillDiv">
                    <h3 id="skillSub"><span>Front-end</span></h3>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/css.png"}></img>
                        <p>CSS</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/html5.png"}></img>
                        <p>html</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/react.png"}></img>
                        <p>React</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/js.png"}></img>
                        <p>JavaScript</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/jquery.png"}></img>
                        <p>JQuery</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                </div>
                <div className="skillDiv">
                    <h3 id="skillSub"><span>ETC(DB,Tool...)</span></h3>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/vscode.png"}></img>
                        <p>VScode</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/travis.png"}></img>
                        <p>travis</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/docker.png"}></img>
                        <p>Docker</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/github.png"}></img>
                        <p>Github</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/mysql.png"}></img>
                        <p>MySql</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/aws.png"}></img>
                        <p>AWS</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={process.env.PUBLIC_URL + "/images/gcp.png"}></img>
                        <p>GCP</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                </div>
            </section>
        )
    }
}