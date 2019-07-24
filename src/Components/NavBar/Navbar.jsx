import React, { Component } from 'react';
import logo from '../../assets/dsc_lockup.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css';



class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <NavLink className = "navbar-brand navbar__brand">
                    <img src = {logo} alt = ' ' className = 'navbar__logo'/>
                    DSC SASTRA
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to = '/blog' className="nav-link">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to = '/events' className="nav-link">Events</NavLink>
                    </li>
                    
                    <li className="nav-item">
                       <NavLink className="nav-link" to = '/team'>Team</NavLink>
                    </li>
                    <li className="nav-item">
                       <NavLink className="nav-link" to = '/contact'>Contact</NavLink>
                    </li>
                    </ul>
                </div>
                </nav>
        );
    }
}

export default Navbar;