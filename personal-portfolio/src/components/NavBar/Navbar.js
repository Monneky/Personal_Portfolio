import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/Logo.png'
    
const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/'>
                        <img src={Logo} alt='Cesar Ivann Logo'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
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