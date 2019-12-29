import React, {useState, useEffect} from "react";
import {Link, Route, Switch} from "react-router-dom";
import MusicService from "../tech/MusicService";

function LandingPage() {

    useEffect(() => {
        MusicService.play("intro");

    });

    return (
        <div style={homePage}>
            <Link to="/choose-starter"><button style={playButton}> Play</button> </Link>
            <img style={principalTitle} src="https://image.noelshack.com/fichiers/2019/49/3/1575471833-rocket-rising-1.png" alt="home page picture" />
        </div>
    )
}

const homePage = {
    backgroundImage: 'url("https://image.noelshack.com/fichiers/2019/49/2/1575393316-background.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    maxWidth: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap-reverse",
};
const principalTitle = {
    width: 321,
    height: 80,
    marginBottom: "90%",
};
const playButton = {
    width: 321,
    height: 79,
    marginBottom: "20%",
    fontFamily: 'Open Sans',
    fontSize: 25,
    color: "azure",
    background: "linear-gradient(180deg, #372020 0%, rgba(255, 255, 255, 0) 100%), #D90502",
    boxShadow: "0 4 4 rgba(0, 0, 0, 0.25)",
    borderRadius: 40,
};




export default LandingPage;
