import React from 'react';
import './DisplayStats.css';

const DisplayStats = ({starters}) => {
    const thePokemon = [];
    const chooseOne = () => {
        thePokemon.push(starters);
        console.log(thePokemon);
    };
    return (
        <div className="container">
            <h1 className="pokeName">{starters.name}</h1>
            <p>{starters.description}</p>
            {starters.name ? <img src={starters.imgType} alt="" /> : null}
            {starters.name ? <button className="selectedPokemon" onClick={chooseOne}>I want this pokemon !</button> : null}
        </div>
    )
};

export default DisplayStats;