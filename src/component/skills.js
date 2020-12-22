import "../css/skills.scss"
import SkillList from './SkillList';
import React from 'react'

const Skills = () => {
    return (
        <section className="slide" id="skills">
                <div className="skillDiv">
                    <h1>Skills</h1>
                    <h3 id="skillSub"><span>Back-end</span></h3>

                    <SkillList skillName="JAVA" star="2" skillImg="java.png" />

                    <SkillList skillName="NODE EXPRESS" star="2" skillImg="node.png" />

                    <SkillList skillName="JPA" star="2" skillImg="jpa.png" />

                    <SkillList skillName="SpringBoot" star="2" skillImg="spring.png" />

                    <SkillList skillName="Nginx" star="2" skillImg="nginx.png" />
                </div>
                <div className="skillDiv">
                    <h3 id="skillSub"><span>Front-end</span></h3>

                    <SkillList skillName="CSS" star="2" skillImg="css.png" />

                    <SkillList skillName="html" star="3" skillImg="html5.png" />

                    <SkillList skillName="React" star="3" skillImg="react.png" />

                    <SkillList skillName="JavsScript" star="3" skillImg="js.png" />

                    <SkillList skillName="TypeScript" star="2" skillImg="ts.png" />

                    <SkillList skillName="Styled-Component" star="2" skillImg="styled.png" />

                    <SkillList skillName="Redux" star="2" skillImg="redux.png" />

                    <SkillList skillName="JQuery" star="1" skillImg="jquery.png" />
                </div>
                <div className="skillDiv">
                    <h3 id="skillSub"><span>ETC(DB,Tool...)</span></h3>

                    <SkillList skillName="VScode" star="3" skillImg="vscode.png" />

                    <SkillList skillName="Travis CI" star="2" skillImg="travis.png" />

                    <SkillList skillName="Jenkins" star="2" skillImg="jenkins.png" />

                    <SkillList skillName="Docker" star="1" skillImg="docker.png" />

                    <SkillList skillName="Github" star="3" skillImg="github.png" />

                    <SkillList skillName="MySql" star="3" skillImg="mysql.png" />

                    <SkillList skillName="AWS" star="2" skillImg="aws.png" />

                    <SkillList skillName="GCP" star="1" skillImg="gcp.png" />
                </div>
            </section>
    )
}
export default Skills
