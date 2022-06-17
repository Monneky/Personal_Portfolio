import React from 'react';
import LogoIvann from '../../assets/LogoIvann.png'

function Header() {
    return (
        <div>
            <div className='Header'>
                <img src={LogoIvann} alt="Ivann's Logo" className='image'/>
                <div className='links'>

                </div>
            </div>
        </div>
    );
}

export default Header;