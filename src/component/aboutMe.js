import React, { Component } from 'react'
export default class aboutMe extends Component {
    render() {
        return (
            <div>
                <section className="et-slide" id="aboutMe">
                    <img src={process.env.PUBLIC_URL + "/images/그림1.png"}></img>
                </section>
            </div>
        )
    }
}
