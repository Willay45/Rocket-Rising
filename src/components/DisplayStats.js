import React, { useState, useEffect } from 'react';
import './DisplayStats.css';

const DisplayStats = ({starters}) => {
    const [image, setImage] = useState('');

    useEffect(() => {
        if (starters.imgType) {
            setImage(require(starters.imgType));
        }
    }, []);

    const choosenPokemon = [];
    const chooseOne = () => {
        choosenPokemon.push(starters);
    };
    console.log(image);
    return (
        <div className="container">
            <h1 className="pokeName">{starters.name}</h1>
            <p>{starters.description}</p>
            {starters.name ? <img src={image} alt="" /> : null}
            {starters.name ? <button className="selectedPokemonButton" onClick={chooseOne}>I want this pokemon !</button> : null}
        </div>
    )
};

export default DisplayStats;