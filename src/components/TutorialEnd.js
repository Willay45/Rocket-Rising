import React from 'react';
import NavBar from "./NavBar";
import './TutorialEnd.css'

const TutorialEnd = () => {

    return (
        <div className="tutorialEndContainer">
            <div className="titleMap"/>

            <div className="backgroundImage"/>

            <div className="tipsEnd">
                <h3> Click on the map ! </h3>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Down_red_arrow.png" alt="red arrow"/>
            </div>
            <NavBar/>
        </div>
    )
};

export default TutorialEnd;