import React from "react";
import computerBackground from "../../assets/backgroundImage.jpeg";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
    return(
        <div>
            <div>
                <img src={computerBackground} alt="background computer" className="back-image"/>
            </div>
            <div className="information">
                <h1>I'm Cesar Ivann</h1>
                <p className="info">
                    I'm a software engineer stutent whose objective is to become a fullstack developer on web, desktop and mobile app
                </p>
            </div>
            <div>
                <Link to='/about_me'>About me</Link> 
            </div>
        </div>
    );
};

export default HomePage;