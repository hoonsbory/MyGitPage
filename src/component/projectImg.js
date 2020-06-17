import React, { Component } from 'react'
import Slider from "react-slick";

export default class projectImg extends Component {
    render() {
        var name = this.props.project;
        const settings = {

            customPaging: function (i) {
                return (
                    <img alt="previewImg" src={`/MyGitPage/images/${name}0${i + 1}.jpg`} width="40px" height="40px" />
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div id="projectImg">
                <Slider {...settings}>
                    <div>
                        <img alt="projectImg" className="projectImg" src={"/MyGitPage/images/" + this.props.project + "01.jpg"} />
                    </div>
                    <div>
                        <img alt="projectImg" className="projectImg" src={"/MyGitPage/images/" + this.props.project + "02.jpg"} />
                    </div>
                    <div>
                        <img alt="projectImg" className="projectImg" src={"/MyGitPage/images/" + this.props.project + "03.jpg"} />

                    </div>
                </Slider>
            </div>
        )
    }
}
