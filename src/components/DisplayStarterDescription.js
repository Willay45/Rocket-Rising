import React, {useState, useEffect} from 'react';
import './DisplayStarterDescription.css';
import axios from 'axios';
import {Link} from "react-router-dom";

const DisplayStarterDescription = ({starters, setPokemonTeam}) => {
    const [starterChoice, setStarterChoice] = useState([]);
    const [choiceDone, setChoiceDone] = useState(false);
    const [nextDisplay, setNextDisplay] = useState(true);

    const chooseOne = async () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${starters.name.toLowerCase()}`)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                const choosenPokemon = data;
                setChoiceDone(true);
                setStarterChoice(choosenPokemon);
            });
    };

    useEffect(() => {
        console.log(starterChoice);
        localStorage.setItem('pokemonTeam', JSON.stringify(starterChoice))
    }, [starterChoice]);

    return (
        <div>
            {nextDisplay ?
                <div className="containerDisplayDescription">
                    <h1 className="pokeName">{starters.name}</h1>
                    <p>{starters.description}</p>
                    <button className="selectedPokemonButton" onClick={() => {
                        setNextDisplay(false)
                    }}>Stats
                    </button>
                    {starters.name ?
                        <button className="selectedPokemonButton" onClick={chooseOne}>I want this pokemon
                            !</button>
                        : null}
                    {
                        choiceDone ? <Link to="/adventure-start"><button>Next</button></Link> : null
                    }
                </div>
                : <div className="containerDisplayStats">
                    <h2 className="pokeName">{starters.name}</h2>
                    <p>Speed : {starters.speed}</p>
                    <p>Special-Defense : {starters.specialDefense}</p>
                    <p>Special-Attack : {starters.specialAttack}</p>
                    <p>Defense : {starters.defense}</p>
                    <p>Attack : {starters.attack}</p>
                    <p>Health : {starters.health}</p>
                    <button className="selectedDescription" onClick={() => {
                        setNextDisplay(true)
                    }}>Description
                    </button>
                    <button className="selectedPokemonButton" onClick={chooseOne}>I want this pokemon !</button>
                </div>}
        </div>
    )
};

export default DisplayStarterDescription;


