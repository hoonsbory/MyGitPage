import Slider from "react-slick";
import React, { useEffect } from 'react'

const ProjectImg = ({ project, length }) => {
    // var map = length.map((x,idx)=> <div><img alt="projectImg" id={"projectImg"+idx} className="projectImg" src={`https://hoonsbory.github.io/MyGitPage/images/${project}0${idx+1}.jpg`} /></div>)
    var map = length.map((x, idx) => <div><img alt="projectImg" id={"projectImg" + idx} className="projectImg" src={`/MygitPage/images/loading.svg`} /></div>)
    const settings = {

        customPaging: function (i) {
            return (
                <img alt="previewImg" id={"projectDockImg" + i} src={`/MygitPage/images/loading.svg`} width="40px" height="40px" />
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    useEffect(() => {
        if (!project) return
        length.forEach((i,idx)=>{
            document.getElementById("projectImg"+idx).src = `/MyGitPage/images/loading.svg`
            document.getElementById("projectDockImg"+idx).src = `/MyGitPage/images/loading.svg`
            var img = new Image();
            img.onload = function () {
                document.getElementById("projectImg"+idx).src = img.src
                document.getElementById("projectDockImg"+idx).src = img.src
            };
            img.src = `/MyGitPage/images/${project}0${idx+1}.jpg`
        })
    }, [project])

    return (
        <div id="projectImg">
            <Slider {...settings}>
                {map}

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


