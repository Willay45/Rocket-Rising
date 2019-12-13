import React, { useState } from 'react';
import './StarterPokemon.css';
import DisplayStats from './DisplayStats';
import starterPack from '../datas/starters.json';

const StarterPokemon = () => {
    const [pokemonStat, setPokemonStat] = useState({});

    const displayPokemon = (character) => {
        setPokemonStat(starterPack.starters[character]);
    };

    return (
        <div className="containerStarter">
            <h1 className="titleChoose">Choose your pokemon !</h1>
            <div className="threePokemons">
                <img className="pokemon"
                     onClick={() => displayPokemon("ekans")}
                     src={starterPack.starters.ekans.img}
                     alt="ekans"
                />
                <img className="pokemon"
                     src={starterPack.starters.gastly.img}
                     onClick={() => displayPokemon("gastly")}
                     alt="gastly"
                />
                <img className="pokemon"
                     src={starterPack.starters.bellsprout.img}
                     onClick={() => displayPokemon("bellsprout")}
                     alt="bellsprout"
                />
            </div>
            <DisplayStats starters={pokemonStat}/>
        </div>
    )
};

export default StarterPokemon;