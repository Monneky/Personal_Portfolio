import React from 'react';
import photo from '../../assets/photo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTwitter,
    faGithubAlt,
    faInstagram,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return(
        <div className='about-me'>
            <div className='up-part'>
                <img src={ photo } alt='Cesar' className='photo-main'/>
                <a href='https://twitter.com/MonekyDFuego'>
                    <FontAwesomeIcon icon={ faTwitter } size="3x"/>
                </a>
                <a href='https://github.com/Monneky'>
                    <FontAwesomeIcon icon={ faGithubAlt } size="3x"/>
                </a>
                <a href='https://www.instagram.com/project_ivann/'>
                    <FontAwesomeIcon icon={ faInstagram } size="3x"/>
                </a>
                <a href='https://www.linkedin.com/in/cesari-llamas/'>
                    <FontAwesomeIcon icon={ faLinkedinIn } size="3x" />
                </a>
            </div>
        </div>
    );
};

export default AboutMe;