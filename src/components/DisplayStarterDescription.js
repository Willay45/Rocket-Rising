import React, {useState, useEffect} from 'react';
import './DisplayStarterDescription.css';



const DisplayStarterDescription = ({starters}) => {
    const [nextDisplay, setNextDisplay] = useState(true);
    const choosenPokemon = [];
    const chooseOne = () => {
        choosenPokemon.push(starters);
    };
    return (
        <div>
            {nextDisplay ?
                <div className="containerDisplayDescription">
                    <h1 className="pokeName">{starters.name}</h1>
                    <p>{starters.description}</p>
                    <button className="selectedPokemonButton" onClick={()=>{setNextDisplay(false)}}>Stats</button>
                    {starters.name ? <button className="selectedPokemonButton" onClick={chooseOne}>I want this pokemon !</button> : null}
                </div> : <div className="containerDisplayStats">
                    <h2 className="pokeName">{starters.name}</h2>
                    <p>Speed : {starters.speed}</p>
                    <p>Special-Defense : {starters.specialDefense}</p>
                    <p>Special-Attack : {starters.specialAttack}</p>
                    <p>Defense : {starters.defense}</p>
                    <p>Attack : {starters.attack}</p>
                    <p>Health : {starters.health}</p>
                    <button className="selectedDescription" onClick={()=>{setNextDisplay(true)}}>Description</button>
                    <button className="selectedPokemonButton" onClick={chooseOne}>I want this pokemon !</button>
                </div>}

        </div>
    )
};

export default DisplayStarterDescription;


