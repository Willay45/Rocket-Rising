import React from 'react';
import './NavMaps.css';
import {Switch, Route, Link} from 'react-router-dom';
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
                            <li><Link className="itemLi" to="/maprender/forest">Forest</Link></li>
                            <li><Link className="itemLi" to="/maprender/desert">Desert</Link></li>
                            <li><Link className="itemLi" to="/maprender/plain">Plain</Link></li>
                            <li><Link className="itemLi" to="/maprender/ocean">Ocean</Link></li>
                            <li><Link className="itemLi" to="/maprender/electrical">Electric central</Link></li>
                            <li><Link className="itemLi" to="/maprender/abandoned">Abandoned house</Link></li>
                            <li><Link className="itemLi" to="/maprender/mountain">Mountain</Link></li>
                            <li><Link className="itemLi" to="/maprender/volcano">Volcano</Link></li>
                            <li><Link className="itemLi" to="/maprender/path">Path</Link></li>
                            <li><Link className="itemLi" to="/maprender/dojo">Dojo</Link></li>
                            <li><Link className="itemLi" to="/maprender/glacier">Glacier</Link></li>
                        </ul>
                    </div>
                </div>
                <NavBar/>
                <div className="darkBottomBorder"></div>
            </div>
        </div>
    )
};

export default NavMaps;