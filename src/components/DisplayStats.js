import React, {useState, useEffect} from 'react';
import './DisplayStats.css';

const DisplayStats = ({starters}) => {

    const choosenPokemon = [];
    const chooseOne = () => {
        choosenPokemon.push(starters);
    };
    return (
        <div>
            <div className="containerDescription">
                <h1 className="pokeName">{starters.name}</h1>
                <p>{starters.description}</p>
                {starters.name ?
                    <button className="selectedPokemonButton" onClick={chooseOne}>I want this pokemon !</button> : null}
            </div>
        </div>
    )
};

export default DisplayStats;