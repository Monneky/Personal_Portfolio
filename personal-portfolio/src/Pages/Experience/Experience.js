import React from "react";
import './Experience-style.css';
import example from '../../assets/experience/example.jpg';

const Experience = () => {
    return(
        <div>
            <div className='container-general'>
                <div className='experience-box'>
                    <div className="title-box">
                        <h3 className="title">Title Example</h3>
                    </div>
                    <div className="image">
                        <img src={example} alt="example" className="img"/>
                    </div>
                </div>
                <div className='experience-box'>
                    <div className="title-box">
                        <h3 className="title">Title Example</h3>
                    </div>
                    <div className="image">
                        <img src={example} alt="example" className="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;