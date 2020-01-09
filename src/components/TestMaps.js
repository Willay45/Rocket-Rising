import React, {useState, useEffect} from "react";
import "./TestMaps.css";
import {maps} from "../services/maps";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";
import MusicService from "../tech/MusicService";
import Game from "../models/Game";

const TestMaps = () => {
    let mapsName = ["pokecenter", "abandoned", "desert", "dojo", "electrical", "forest", "glacier", "mountain", "ocean", "path", "plains", "volcano"];

    const [currentMap, setCurrentMap] = useState(0);
    const [currentMapName, setCurrentMapName] = useState(mapsName[currentMap]);
    const [selectedMap, setSelectedMap] = useState({});

    useEffect(()=>{
        MusicService.play("map");
    });

    useEffect(() => {
        setCurrentMapName(mapsName[currentMap]);
        setSelectedMap(maps[currentMap])
    }, [currentMap]);

    const increase = () => {
        if (currentMap < mapsName.length - 1) {
            setCurrentMap(currentMap + 1);
        } else {
            setCurrentMap(0);
        }
    };

    const decrease = () => {
        if (currentMap > 0) {
            setCurrentMap(currentMap - 1);
        } else {
            setCurrentMap(mapsName.length - 1);
        }
    };

    return (
        <div className="mapsContainer">
            <h1>Destination</h1>
            <div className="navigationContainer">
                <div
                    className="navDiv"
                    onClick={decrease}
                >
                    <img className="leftArrow"
                         src="https://image.noelshack.com/fichiers/2019/52/4/1577375125-pngkit-arrow-pointing-down-png-508417.png"
                         alt="left direction arrow"/>
                </div>
                <div className="selectedMap">
                    {selectedMap.name ?
                        <div className="mapBackgroundNav">
                            <h1 className="mapTitleNav">{selectedMap.name.toUpperCase()}</h1>
                            <img className="mapSelected" src={selectedMap.img} alt="map"/>
                            <div className="typesAndLink">
                                {selectedMap.id === "pokecenter" ?
                                    null :
                                    <p style={{textAlign: "center", fontSize: "18px", color: "#E6462D"}}>Pokemon's type
                                        you can find
                                        there:</p>
                                }
                                <div className="allTheTypes">
                                    {selectedMap.types ?
                                        selectedMap.types.map((element) => {
                                                return (<p className="typeMapNav">{element.typeName.toUpperCase()}</p>)
                                            }
                                        )
                                        : null}
                                </div>
                            </div>
                            {currentMapName === "pokecenter" ?
                                <Link className="linkToMap" to={"/pokecenter"}>Go !</Link>
                                :
                                <Link className="linkToMap" to={`/map/${currentMapName}`}>Go !</Link>
                            }
                        </div>
                        : <h1 className="mapTitleNav">{currentMapName.toUpperCase()}</h1>
                    }
                </div>
                <div
                    className="navDiv"
                    onClick={increase}
                >
                    <img alt="right direction arrow"
                         className="rightArrow"
                         src="https://image.noelshack.com/fichiers/2019/52/4/1577375125-pngkit-arrow-pointing-down-png-508417.png"
                    />
                </div>
            </div>
            <NavBar/>
        </div>
    )
};

export default TestMaps;