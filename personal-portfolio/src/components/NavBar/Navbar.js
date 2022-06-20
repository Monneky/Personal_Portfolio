import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/Logo.png'
import "./Navbar.css";
    
const Navbar = () => {
    return (
        <div>
            <ul>
                <li className="logo-field">
                    <NavLink to='/'>
                        <img src={Logo} alt='Cesar Ivann Logo'/>
                    </NavLink>
                </li>
                <li className="Home">
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className="Blog">
                    <NavLink to='/blog'>Blog</NavLink>
                </li>
                <li>
                    <NavLink to='/experience'>Experience</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;