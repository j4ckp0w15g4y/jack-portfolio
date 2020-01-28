import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1><Link to="/"  id="header-hero" >JACK GAY</Link></h1>

                <nav className="header-nav">
                    <ul>
                        <li><Link to='/about'  className="header-item">About</Link></li>
                        <li><Link to='/portfolio'  className="header-item" >Portfolio</Link></li>
                        <li><Link to='/contact'  className="header-item" >Contact</Link></li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default Header;