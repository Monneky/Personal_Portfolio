import React from "react";
import computerBackground from "../../assets/backgroundImage.jpeg";
import "./HomePage.css";

const HomePage = () => {
    return(
        <div>
            <div className="">
                <img src={computerBackground} alt="background computer" className="back-image"/>
            </div>
        </div>
    );
};

export default HomePage;