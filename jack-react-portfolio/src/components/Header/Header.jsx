import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1><Link to="/">Jack Gay</Link></h1>

                <nav className="header-nav">
                    <ul>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default Header;