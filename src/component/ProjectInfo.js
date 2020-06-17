import React, { Component } from 'react'

export default class ProjectInfo extends Component {
    componentDidMount() {

        document.getElementById(this.props.imgList).innerHTML = this.props.stack
        document.getElementById(this.props.imgList+"content").innerHTML = this.props.content
    }
    render() {
        return (
            <div>
                <img alt="listBtnImg" onClick={() => this.imageList(this.props.imgList)} src={"MyGitPage/images/interface.png"} className="imgList"></img>
                <img alt="projectImg" className="projectImg" src={"MyGitPage/images/"+this.props.mainImg}></img>
                <div id="projectText"><p><strong>프로젝트명 - </strong>{this.props.title}</p>
                    <p><strong>제작기간 - </strong>{this.props.date}</p>
                    <p><strong>사용기술 - </strong><span className="stackSpan" id={this.props.imgList}></span></p>
                    <p><strong>역할- </strong>{this.props.role}</p>
                    <p style={{ marginBottom: "0" }}><strong>설명 - </strong><span id={this.props.imgList+"content"}></span></p>
                    <p style={{ display: "inline" }}><strong>깃허브 & 웹사이트 - </strong></p><a href={'https://github.com/hoonsbory/' + this.props.url}>
                        <img alt="githubImg" src={"MyGitPage/images/github.png"}></img>
                    </a>
                    {this.props.site ? <div id="betweenP"><p>&</p><a href={"https://" + this.props.site}>
                        <img alt="siteImg" src={"MyGitPage/images/" + this.props.icon}></img></a></div> : ""}
                </div>
            </div>
        )
    }
}
