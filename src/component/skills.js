import React, { Component } from 'react'
import "../css/skills.scss"
import BeautyStars from 'beauty-stars';
export default class skills extends Component {
    render() {
        return (
            <section className="slide" id="skills">
                <div className="skillDiv">
                    <h1>Skills</h1>
                    <h3 id="skillSub"><span>Back-end</span></h3>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/java.png"}></img>
                        <p>JAVA</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/jpa.png"}></img>
                        <p>JPA</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/spring.png"}></img>
                        <p>SpringBoot</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/nginx.png"}></img>
                        <p>Nginx</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                </div>
                <div className="skillDiv">
                    <h3 id="skillSub"><span>Front-end</span></h3>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/css.png"}></img>
                        <p>CSS</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/html5.png"}></img>
                        <p>html</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/react.png"}></img>
                        <p>React</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/js.png"}></img>
                        <p>JavaScript</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/jquery.png"}></img>
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
                        <img alt="skillImg" src={"/images/vscode.png"}></img>
                        <p>VScode</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/travis.png"}></img>
                        <p>travis</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/docker.png"}></img>
                        <p>Docker</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/github.png"}></img>
                        <p>Github</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/mysql.png"}></img>
                        <p>MySql</p>
                        <BeautyStars
                            value={3}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/aws.png"}></img>
                        <p>AWS</p>
                        <BeautyStars
                            value={2}
                            size={"10px"}
                            gap={"5px"}
                            inactiveColor={"gray"}
                        />
                    </div>
                    <div className="imgDiv">
                        <img alt="skillImg" src={"/images/gcp.png"}></img>
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
