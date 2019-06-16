import React, { Component } from 'react';
import './Portfolio.css'
import Made2FitHero from "../../Assets/made2fit-hero.png"
import NYCShooting from "../../Assets/nyc-shooting-incident-hero.png"
import RecycloHero from "../../Assets/recyclo-hero.png"


class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="portfolio-images">
                   <a href="https://epic-jones-4619fa.netlify.com/"> <img src={Made2FitHero} className=""></img></a>        
                   <a href="https://nypd-shooting-incidents-2018.herokuapp.com/"> <img src={NYCShooting} className=""></img></a>        
                   <a href="http://recyclo.surge.sh/"> <img src={RecycloHero} className=""></img></a>                       
                </div>

            </div>
        );
    }
}

export default Portfolio;