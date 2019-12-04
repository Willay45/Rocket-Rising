import React, { useState } from 'react';
import './StarterPokemon.css';
import DisplayStats from "./DisplayStats";

const StarterPokemon = () => {
    const [pokemonStat, setPokemonStat] = useState({});

    const starters = [];

    let ekans = {
        img: 'http://www.pokestadium.com/sprites/xy/ekans.gif',
        name: 'Ekans',
        description: 'Ekans is a purple, serpentine Pokémon. Its eyes, underbelly, the thick stripe around its neck, and rattle are yellow.',
        type: 'Poison',
        imgType: require('../images/poison.png')
    };
    let gastly = {
        img: 'http://www.pokestadium.com/sprites/xy/gastly.gif',
        name: 'Gastly',
        description: 'Gastly has no true form, due to 95% of its body being poisonous gas. However, it consistently appears as a black, spherical Pokémon surrounded by a purple haze.',
        type: 'Ghost',
        imgType: require('../images/ghost.png')
    };
    let bellsprout = {
        img: 'http://www.pokestadium.com/sprites/xy/bellsprout.gif',
        name: 'Bellsprout',
        description: 'Bellsprout is a plant-based Pokémon with a stem-like brown body. There is a single green leaf on each side of its body. It has a yellow bell-shaped head with what appear to be pink lips at the end and beady black eyes.',
        type: 'Grass',
        imgType: require('../images/grass.png')
    };
    starters.push(ekans, gastly, bellsprout);

    /*
        const fetchEkans = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/ekans`)
                .then(response => response.data)
                .then(data => {
                    ekans = data;
                    console.log(ekans.name);
                });
        };

        const fetchGastly = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/gastly`)
                .then(response => response.data)
                .then(data => {
                    gastly = data;
                    console.log(gastly.name);
                });
        };

        const fetchGrimer = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/grimer`)
                .then(response => response.data)
                .then(data => {
                    grimer = data;
                    console.log(grimer.name);
                });
        };
    */

    const displayPokemon = (index) => {
        setPokemonStat(starters[index]);
    };

    return (
        <div className="thePage">
            <h1 className="titleChoose">Choose your pokemon !</h1>
            <div className="threePokemons">
                <img className="pokemon" onClick={() => {
                    displayPokemon(0)
                }} src={ekans.img}
                     alt="ekans"/>
                <img className="pokemon" src={gastly.img} onClick={() => {
                    displayPokemon(1)
                }}
                     alt="gastly"/>
                <img className="pokemon" src={bellsprout.img} onClick={() => {
                    displayPokemon(2)
                }}
                     alt="bellsprout"/>
                <DisplayStats
                   starters={pokemonStat}/>
            </div>
        </div>
    )
};

export default StarterPokemon;