import React from "react";
import "./NavMaps.css";
import {Switch, Route, Link} from "react-router-dom";
import NavBar from "./NavBar";

const NavMaps = () => {
    return (
        <div className="bigContainer">
            <div className="container">
                <div className="darkBorder">
                    <h1 className="mapTitle">Map</h1>
                    <p className="hint">Click on the destination you want !</p>
                </div>
                <div className="backgroundDiv">
                    <div className="mapRenderNav">
                        <ul>
                            <li><Link className="itemLi" to="/map/forest">Forest</Link></li>
                            <li><Link className="itemLi" to="/map/desert">Desert</Link></li>
                            <li><Link className="itemLi" to="/map/plain">Plain</Link></li>
                            <li><Link className="itemLi" to="/map/ocean">Ocean</Link></li>
                            <li><Link className="itemLi" to="/map/electrical">Electric central</Link></li>
                            <li><Link className="itemLi" to="/map/abandoned">Abandoned house</Link></li>
                            <li><Link className="itemLi" to="/map/mountain">Mountain</Link></li>
                            <li><Link className="itemLi" to="/map/volcano">Volcano</Link></li>
                            <li><Link className="itemLi" to="/map/path">Path</Link></li>
                            <li><Link className="itemLi" to="/map/dojo">Dojo</Link></li>
                            <li><Link className="itemLi" to="/map/glacier">Glacier</Link></li>
                        </ul>
                    </div>
                </div>
                <NavBar/>
                <div className="darkBottomBorder"/>
            </div>
        </div>
    )
};

export default NavMaps;