import React from 'react'
import BeautyStars from 'beauty-stars';

const SkillList = ({skillImg, skillName, star}) => {
    return (
        <div className="imgDiv">
            <img alt="skillImg" src={`${process.env.PUBLIC_URL}/images/${skillImg}`}></img>
            <p>{skillName}</p>
            <BeautyStars
                value={star}
                size={"10px"}
                gap={"5px"}
                inactiveColor={"gray"}
            />
        </div>
    )
}
export default SkillList