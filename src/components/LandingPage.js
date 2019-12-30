import React, {useState, useEffect} from "react";
import {Link, Route, Switch} from "react-router-dom";
import MusicService from "../tech/MusicService";
import "./LandingPage.css";

function LandingPage() {

    useEffect(() => {
        MusicService.play("intro");

    });

    return (
        <div className="homePage">
            <Link to="/choose-starter"><button className="playButton">Play</button> </Link>
            <img className="principalTitle" src="https://image.noelshack.com/fichiers/2019/49/3/1575471833-rocket-rising-1.png" alt="home page picture" />
        </div>
    )
}




export default LandingPage;
