import React, { Component } from 'react';
import PortImage from "../../Assets/portfolio-image.jpg";
import './Home.css'


class Home extends Component {
    render() {
        return (
            <div>
                <h1>I'm a web developer and music publicist currently based in London</h1>
                <img src={PortImage} className="hero-image" title="Jack Gay Image"></img>
            </div>
        );
    }
}

export default Home;