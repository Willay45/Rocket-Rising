import React, {useState, useEffect} from "react";
import "./LandingPage.css";
import {Link, Route, Switch} from "react-router-dom";

function LandingPage() {
    const [isExisting, setIsExisting] = useState(false);

    useEffect(() => {
        newPlayer()
    }, []);
    const newPlayer = () => {
        let localSave = JSON.parse(localStorage.getItem('pokemonTeam'));
        console.log(localSave);
        if (localSave != null) {
            setIsExisting(true);
        }
    };
    return (
        <div>
            {
                isExisting ?
                    <div>
                        <div className="homePage">
                            <Link to="/adventure-start">
                                <button className="playButton"> Play</button>
                            </Link>
                            <img className="principalTitle"
                                 src="https://image.noelshack.com/fichiers/2019/49/3/1575471833-rocket-rising-1.png"
                                 alt="home page picture"/>
                        </div>
                    </div>
                    :
                    <div className="homePage">
                        <Link to="/starter-pokemon">
                            <button className="playButton"> Play</button>
                        </Link>
                        <img className="principalTitle"
                             src="https://image.noelshack.com/fichiers/2019/49/3/1575471833-rocket-rising-1.png"
                             alt="home page picture"/>
                    </div>
            }

        </div>
    )
}


export default LandingPage;
