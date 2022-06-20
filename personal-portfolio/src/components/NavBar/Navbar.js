import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png'
    
const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/' className="Link">
                        <img src={Logo} alt='Cesar Ivann Logo'/>
                    </Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/experience'>Experience</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;