import React, { Component } from 'react';
import './Portfolio.css'
import Made2FitHero from "../../Assets/made2fit-hero.png"
import NYCShooting from "../../Assets/nyc-shooting-incident-hero.png"
import RecycloHero from "../../Assets/recyclo-hero.png"
import GitHub from "../../Assets/25231.svg"


class Portfolio extends Component {
    render() {
        return (
            <div>
                <h2>PORTFOLIO</h2>
                <div className="portfolio-images">
                   <a href="https://epic-jones-4619fa.netlify.com/" target="_blank" rel="noopener noreferrer"> <img src={Made2FitHero} className="project-image" title="Made2Fit"></img></a>
                   {/* <p className="project-info">Made2Fit</p> */}

                   <a href="https://nypd-shooting-incidents-2018.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src={NYCShooting} className="project-image"></img></a>    
                   {/* <p className="project-info">NYC Shooting Incidents 2018</p>                        */}


                   <a href="http://recyclo.surge.sh/" target="_blank" rel="noopener noreferrer"> <img src={RecycloHero} className="project-image"></img></a>
                   {/* <p className="project-info">Recyclo</p>                        */}

                </div>
                <div className="git-link">
                <a href="https://github.com/shenae/made2fit" target="_blank" rel="noopener noreferrer"> <img src={GitHub} className=""></img></a>        
                <a href="https://github.com/j4ckp0w15g4y/gun-crime-2018" target="_blank" rel="noopener noreferrer"> <img src={GitHub} className=""></img></a>  
                <a href="https://github.com/j4ckp0w15g4y/recyclo" target="_blank" rel="noopener noreferrer"> <img src={GitHub} className=""></img></a>                        
                </div>


            </div>
        );
    }
}

export default Portfolio;