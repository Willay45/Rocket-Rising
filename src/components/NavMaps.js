import React from 'react';
import './NavMaps.css';
import {Switch, Route, Link} from 'react-router-dom';
import ForestMap from "./ForestMap";
import DesertMap from "./DesertMap";
import PlainMap from "./PlainMap";
import OceanMap from "./OceanMap";
import ElectricalMap from "./ElectricalMap";
import AbandonedBuildingMap from "./AbandonnedBuildingMap";
import MountainMap from "./MountainMap";
import VolcanoMap from "./VolcanoMap";
import PathMap from "./PathMap";
import DojoMap from "./DojoMap";
import GlacierMap from "./GlacierMap";
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
                            <li><Link className="itemLi" to="/Map">NavMap</Link></li>
                            <li><Link className="itemLi" to="/ForestMap">Forest</Link></li>
                            <li><Link className="itemLi" to="/DesertMap">Desert</Link></li>
                            <li><Link className="itemLi" to="/PlainMap">Plain</Link></li>
                            <li><Link className="itemLi" to="/OceanMap">Ocean</Link></li>
                            <li><Link className="itemLi" to="/ElectricalMap">Electric central</Link></li>
                            <li><Link className="itemLi" to="/AbandonedBuildingMap">Abandoned house</Link></li>
                            <li><Link className="itemLi" to="/MountainMap">Mountain</Link></li>
                            <li><Link className="itemLi" to="/VolcanoMap">Volcano</Link></li>
                            <li><Link className="itemLi" to="/PathMap">Path</Link></li>
                            <li><Link className="itemLi" to="/DojoMap">Dojo</Link></li>
                            <li><Link className="itemLi" to="/GlacierMap">Glacier</Link></li>
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