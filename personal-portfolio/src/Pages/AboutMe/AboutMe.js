import React from 'react';
import photo from '../../assets/photo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTwitter,
    faGithubAlt,
    faInstagram,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import {
    faMusic,
    faMugHot,
    faMobileButton,
    faDesktop,
    faGamepad,
    faCloudArrowDown
} from '@fortawesome/free-solid-svg-icons';
import download from '../../assets/Cesar_Ivann_Resume.pdf';
import './aboutme.css';

const AboutMe = () => {
    return(
        <div className='about-me'>
            <div className='up-part'>
                <div className='image-container'>
                    <img src={ photo } alt='Cesar' className='photo-main'/>
                </div>
                <div className='social-network'>
                    <a href='https://twitter.com/MonekyDFuego' className='link-socialNetwork'>
                        <FontAwesomeIcon icon={ faTwitter } size="3x"/>
                    </a>
                    <a href='https://github.com/Monneky' className='link-socialNetwork'>
                        <FontAwesomeIcon icon={ faGithubAlt } size="3x"/>
                    </a>
                    <a href='https://www.instagram.com/project_ivann/' className='link-socialNetwork'>
                        <FontAwesomeIcon icon={ faInstagram } size="3x"/>
                    </a>
                    <a href='https://www.linkedin.com/in/cesari-llamas/' className='link-socialNetwork'>
                        <FontAwesomeIcon icon={ faLinkedinIn } size="3x" />
                    </a>
                </div>
            </div>
            <div className='middle-part'>
                <h2 className='title-aboutme'>about me</h2>
                <p className='information'>
                    Hello, My name is Cesar Ivann Llamas, I’m currently studying the 7th grade of computer science. I study in Tec de Monterrey campus Guadalajara based in Jalisco, Mexico. I’m enthusiastic about IT, and Arts. I enjoy learning new things in the field of IT such as frameworks and I like making projects. I'm interested in the area of web, mobile and desktop development, one of my big goals is to become a full stack developer, additionally I can speak fluid English and Spanish.
                </p>
            </div>
            <div className='lower-part'>
                <h2 className='title-interests'>My interests</h2>
                <div className='cards'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faGamepad} size="3x"/>
                    </div>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, nisi ut sagittis pellentesque, sem nulla tristique lacus, a molestie tortor nibh sit amet erat. Suspendisse potenti. Nunc posuere, magna quis lacinia viverra, </p>
                </div>
                <div className='cards'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faMusic} size="3x"/>
                    </div>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, nisi ut sagittis pellentesque, sem nulla tristique lacus, a molestie tortor nibh sit amet erat. Suspendisse potenti. Nunc posuere, magna quis lacinia viverra, </p>
                </div>
                <div className='cards'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faMugHot} size="3x"/>
                    </div>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, nisi ut sagittis pellentesque, sem nulla tristique lacus, a molestie tortor nibh sit amet erat. Suspendisse potenti. Nunc posuere, magna quis lacinia viverra, </p>
                </div>
                <div className='cards'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faMobileButton} size="3x"/>
                    </div>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, nisi ut sagittis pellentesque, sem nulla tristique lacus, a molestie tortor nibh sit amet erat. Suspendisse potenti. Nunc posuere, magna quis lacinia viverra, </p>
                </div>
                <div className='cards'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faDesktop} size="3x"/>
                    </div>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, nisi ut sagittis pellentesque, sem nulla tristique lacus, a molestie tortor nibh sit amet erat. Suspendisse potenti. Nunc posuere, magna quis lacinia viverra, </p>
                </div>
                <div className='downloadButton'>
                    <a href={download} download="Cesar Ivann CV" className='button'>
                        Download CV
                        <FontAwesomeIcon icon={faCloudArrowDown} size="2x"/>
                    </a>
                </div>
            </div>           
        </div>
    );
};

export default AboutMe;
