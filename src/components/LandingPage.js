import React from "react";
import "./LandingPage.css";
import {Link, Route, Switch} from "react-router-dom";

function LandingPage() {

    return (
        <div className="homePage">
            <Link to="/starter-pokemon"><button className="playButton"> Play</button> </Link>
            <img className="principalTitle" src="https://image.noelshack.com/fichiers/2019/49/3/1575471833-rocket-rising-1.png" alt="home page picture" />
        </div>
    )
}


export default LandingPage;
