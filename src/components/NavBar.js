import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import NavMaps from "./NavMaps";

const NavBar = () => {
    return (
        <div className="navButtons">
            <Link to="/inventory">
                <img src="https://image.noelshack.com/fichiers/2019/49/4/1575564164-backpack.png"
                     alt="inventory"
                     className="itemNav backpack"
                />
            </Link>
            <Link to="/Map">
                <img src="https://image.noelshack.com/fichiers/2019/49/4/1575565596-mappokemon.png"
                     className="map itemNav"
                     alt="mini map"
                />
            </Link>
            <Link to="/team-pokemon">
                <img src="https://image.noelshack.com/fichiers/2019/49/5/1575621888-pokerocket.png"
                     alt="pokemon team"
                     className="pokeTeam itemNav"
                />
            </Link>
        </div>
    )
};

export default NavBar;