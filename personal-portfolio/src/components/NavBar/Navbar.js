import React from 'react' 
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import './NavBarStyle.css'

const NavBar = () => {
    return (
        <div className='navbar-body'>
            <div className='image-link-div'>
               <Link to='/' className='image-link'>   
                    <img src={Logo} alt='Logo' className='logo-iv'/>
                </Link>
            </div>
            <div className='links'>
                <Link to='/' className='button home'>Home</Link>
                <Link to='/blog' className='button blog'>Blog</Link>
                <Link to='/Experience' className='button experience'>Experience</Link>
                <Link to='/contact' className='button contact'>Contact</Link>
            </div>
        </div>
    );
}

export default NavBar;
