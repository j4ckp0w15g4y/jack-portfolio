import React, { Component } from 'react';
import './Portfolio.css'
import Made2FitHero from "../../Assets/made2fit-hero.png"
import NYCShooting from "../../Assets/nyc-shooting-incident-hero.png"
import RecycloHero from "../../Assets/recyclo-hero.png"
import GitHub from "../../Assets/25231.svg"
import JackSite from "../../Assets/jack-site.png"
import ShowHost from "../../Assets/showhost.png"


class Portfolio extends Component {
    render() {
        return (
            <div>
                <h2>PORTFOLIO</h2>
                <div className="portfolio-images">
                    <div className="project">   
                    <div className="project-shot">                     
                   <a href="https://epic-jones-4619fa.netlify.com/" target="_blank" rel="noopener noreferrer"> <img src={Made2FitHero} className="project-image" title="Made2Fit"></img></a>
                   </div>
                   {/* <p className="project-info">Made2Fit</p> */}
                   <div className="git-info">
                       <p><h2>Made2Fit:</h2> I undertook this project in collaboration with UX students and classmates.</p>
                  
                   <a href="https://github.com/shenae/made2fit" target="_blank" rel="noopener noreferrer"> <img src={GitHub} className="github"></img></a>        
                   </div>
                   </div>

                   <div className="project">   
                    <div className="project-shot"> 
                   <a href="https://nypd-shooting-incidents-2018.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src={NYCShooting} className="project-image"></img></a>    
                   {/* <p className="project-info">NYC Shooting Incidents 2018</p>                        */}
                   </div>
                   <div className="git-info">
                   <p><h2>Made2Fit:</h2> I undertook this project in collaboration with UX students and classmates.</p>

                   <a href="https://github.com/j4ckp0w15g4y/gun-crime-2018" target="_blank" rel="noopener noreferrer"> <img src={GitHub} className="github"></img></a>  
                   </div>
                   </div> 

                   <div className="project">   
                    <div className="project-shot"> 
                   <a href="http://recyclo.surge.sh/" target="_blank" rel="noopener noreferrer"> <img src={RecycloHero} className="project-image"></img></a>
                   {/* <p className="project-info">Recyclo</p>                        */}
                   </div>
                   <div className="git-info">
                   <p><h2>Made2Fit:</h2> I undertook this project in collaboration with UX students and classmates.</p>

                   <a href="https://github.com/j4ckp0w15g4y/recyclo" target="_blank" rel="noopener noreferrer"> <img src={GitHub} className="github"></img></a> 
                    </div>
                    </div>

                    <div className="project">   
                    <div className="project-shot"> 
                   <a href="https://jackgay.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src={JackSite} className="project-image"></img></a>
                  </div>
                  <div className="git-info">
                  <p><h2>Made2Fit:</h2> I undertook this project in collaboration with UX students and classmates.</p>

                   <a href="https://github.com/j4ckp0w15g4y/jack-portfolio" target="_blank" rel="noopener noreferrer"> <img src={GitHub} className="github"></img></a>                        
                   </div>
                    </div>

                    <div className="project">   
                    <div className="project-shot"> 
                   <a href="https://showhost-nyc.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src={ShowHost} className="project-image"></img></a>
                    </div>
                    <div className="git-info">
                    <p><h2>Made2Fit:</h2> I undertook this project in collaboration with UX students and classmates.</p>

                   <a href="https://github.com/j4ckp0w15g4y/show-host" target="_blank" rel="noopener noreferrer"> <img src={GitHub} className="github"></img></a>                        

                   </div>
                    </div>

                </div>
                {/* <div className="git-link"> </div> */}


            </div>
        );
    }
}

export default Portfolio;