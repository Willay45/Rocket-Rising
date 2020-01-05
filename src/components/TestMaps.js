import React, {useState, useEffect} from "react";
import "./TestMaps.css";
import {maps} from "../services/maps";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

const TestMaps = () => {
    let mapsName = ["pokecenter", "abandoned", "desert", "dojo", "electrical", "forest", "glacier", "mountain", "ocean", "path", "plains", "volcano"];

    const [currentMap, setCurrentMap] = useState(0);
    const [currentMapName, setCurrentMapName] = useState(mapsName[currentMap]);
    const [selectedMap, setSelectedMap] = useState({});

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
            <img className="navigationTitleImage"
                 src="https://fontmeme.com/permalink/191226/64dc75d51622372524761ffb2576dd23.png"/>
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
                            <img className="mapSelected" src={selectedMap.img} alt="map image"/>
                            {selectedMap.types ?
                                <div className="typesAndLink">
                                    <p style={{textAlign: "center", fontSize: "18px", color: "#E6462D"}}>Types of
                                        pokemon you can find
                                        there:</p>
                                    <div className="allTheTypes">
                                        {selectedMap.types ?
                                            selectedMap.types.map((element) => {
                                                    return (<p className="typeMapNav">{element.typeName.toUpperCase()}</p>)
                                                }
                                            )
                                            : null}
                                    </div>
                                </div>
                                : null}
                            <Link className="linkToMap" to={selectedMap.pathname}>Go to: {currentMapName.toUpperCase()}</Link>
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