import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1>ABOUT ME</h1>
                <p>
                    I am an experienced and proficient Software Engineer with a background in editorial and music copywriting. I have a creative mindset, and a targets-driven outlook. I am adaptable and diligent with first class communication skills developed through multiple internships spanning the music, creative, and fashion industries. My programming style is imbued with these invaluable traits.
                   </p>
                <div className="icon-list">
                    <i className="favicon devicon-css3-plain"></i>
                    <i className="favicon devicon-sequelize-plain"></i>
                    <i className="favicon devicon-postgresql-plain"></i>
                    <i className="favicon devicon-html5-plain"></i>
                    <i className="favicon devicon-javascript-plain"></i>
                    <i className="favicon devicon-express-original"></i>
                    <i className="favicon devicon-rails-plain"></i>
                    <i className="favicon devicon-ruby-plain"></i>
                    <i className="favicon devicon-react-original"></i>
                </div>
            </div>
        );
    }
}

export default About;