import React from 'react';
import photo from '../../assets/photo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTwitter,
    faGithubAlt,
    faInstagram,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return(
        <div className='about-me'>
            <div className='up-part'>
                <img src={ photo } alt='Cesar' className='photo-main'/>
                <FontAwesomeIcon icon={ faTwitter } size="3x"/>
                <FontAwesomeIcon icon={ faGithubAlt } size="3x"/>
                <FontAwesomeIcon icon={ faInstagram } size="3x"/>
                <FontAwesomeIcon icon={ faLinkedinIn } size="3x" />
            </div>
        </div>
    );
};

export default AboutMe;