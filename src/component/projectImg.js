import Slider from "react-slick";
import React from 'react'

const ProjectImg = ({project,length}) =>  {
        const settings = {

            customPaging: function (i) {
                return (
                    <img alt="previewImg" src={`/MyGitPage/images/${project}0${i + 1}.jpg`} width="40px" height="40px" />
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        // var map = length.map((x,idx)=> <div><img alt="projectImg" className="projectImg" src={`/MyGitPage/images/${project}0${idx+1}.jpg`} /></div>)
        
    return (
        <div id="projectImg">
                <Slider {...settings}>
                    {length.map((x,idx)=> <div><img alt="projectImg" className="projectImg" src={`/MyGitPage/images/${project}0${idx+1}.jpg`} /></div>)}
                    
                    {/* <div>
                        <img alt="projectImg" className="projectImg" src={"/MyGitPage/images/" + project + "01.jpg"} />
                    </div>
                    <div>
                        <img alt="projectImg" className="projectImg" src={"/MyGitPage/images/" + project + "02.jpg"} />
                    </div>
                    <div>
                        <img alt="projectImg" className="projectImg" src={"/MyGitPage/images/" + project + "03.jpg"} />

                    </div> */}
                </Slider>
            </div>
    )
}
export default ProjectImg


