import React from 'react';
import photo from '../../assets/photo.jpeg';

const AboutMe = () => {
    return(
        <div className='about-me'>
            <div className='up-part'>
                <img src={ photo } alt='Cesar' className='photo-main'/>
                
            </div>
        </div>
    );
};

export default AboutMe;