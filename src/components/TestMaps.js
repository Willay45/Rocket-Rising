import React, {useState, useEffect} from 'react';
import './TestMaps.css';
import {maps} from '../services/maps';
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

const TestMaps = () => {
    let mapsName = ["abandoned", "desert", "dojo", "electrical", "forest", "glacier", "mountain", "ocean", "path", "plains", "volcano"];

    const [currentMap, setCurrentMap] = useState(0);
    const [currentMapName, setCurrentMapName] = useState(mapsName[currentMap]);
    const [selectedMap, setSelectedMap] = useState({});

    useEffect(() => {
        setCurrentMapName(mapsName[currentMap]);
        console.log("New render asked");
        console.log(maps);
        console.log(currentMapName);
        setSelectedMap(maps[currentMap])
    }, [currentMap]);

    const increase = () => {
        if (currentMap < mapsName.length - 1) {
            setCurrentMap(currentMap + 1);
            console.log(currentMap);
        } else {
            setCurrentMap(0);
            console.log("Can't increase more")
        }
    };

    const decrease = () => {
        if (currentMap > 0) {
            setCurrentMap(currentMap - 1);
            console.log(currentMap)
        } else {
            setCurrentMap(mapsName.length - 1);
            console.log("Can't decrease more")
        }
    };

    const backgroundSelectedMap = {
        backgroundImage: `url(${selectedMap.img})`,
        backgroundRepeat: "noRepeat",
        backgroundSize: "contain"
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
                         alt=""/>
                </div>
                <div className="selectedMap">
                    {selectedMap.name ?
                        <h1 className="mapTitleNav">{selectedMap.name.toUpperCase()}</h1>
                        : <h1 className="mapTitleNav">{currentMapName.toUpperCase()}</h1>
                    }
                    <img className="mapImage" src={selectedMap.img} alt="map background"/>
                    <p style={{textAlign: "center", fontSize: "18px", color: "#E6462D"}}>Types of pokemon you can find
                        there:</p>
                    {selectedMap.types ?
                        selectedMap.types.map((element) => {
                                return (<p className="typeMapNav">{element.typeName.toUpperCase()}</p>)
                            }
                        )
                        : null}
                    <Link className="linkToMap" to={`/map/${currentMapName}`}>Go to: {currentMapName}</Link>
                </div>
                <div
                    className="navDiv"
                    onClick={increase}
                >
                    <img className="rightArrow"
                         src="https://image.noelshack.com/fichiers/2019/52/4/1577375125-pngkit-arrow-pointing-down-png-508417.png"
                    />
                </div>
            </div>
            <NavBar/>
        </div>
    )
};

export default TestMaps;