import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>CONTACT</h2>
                <a className="contact-link" href="https://www.linkedin.com/in/jack-gay/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                <a className="contact-link" href="mailto:jackpowis@gmail.com" target="_blank" rel="noopener noreferrer">EMAIL ME</a>
                
            </div>
        );
    }
}

export default Contact;