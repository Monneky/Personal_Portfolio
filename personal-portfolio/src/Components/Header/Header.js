import React from 'react';
import LogoIvann from '../../assets/LogoIvann.png'

function Header() {
    return (
        <div>
            <h1>Testing the header component</h1>
            <img src={LogoIvann} alt="Ivann's Logo"/>
        </div>
    );
}

export default Header;