import React, {useState, useEffect} from 'react';
import './TeamPokemon.css';
import axios from 'axios';
import DisplayPokemonTeamStats from './DisplayPokemonTeamStats';
import PokemonCard from "./PokemonCard";

const TeamPokemon = () => {
    const [pokemonTeam, setPokemonTeam] = useState([]);
    const [newPokemon, setNewPokemon] = useState({});
    const [localData, setLocalData] = useState(() => {
        localStorage.getItem('fetched pokemon')
    });
    const [statsRequired, setStatsRequired] = useState(false);
    const [pokemonStat, setPokemonStat] = useState({});
    const [indexSelected, setIndexSelected] = useState(null);

    const showStats = (element, index) => {
        setStatsRequired(true);
        let selectedPokemon = element;
        setIndexSelected(index);
        setPokemonStat(selectedPokemon);
    };

    let model = [
        {
            name: "pikachu",
            type: "electric",
            stats:
                [
                    {base_stat: 88},
                    {base_stat: 24},
                    {base_stat: 48},
                    {base_stat: 80},
                    {base_stat: 35},
                    {base_stat: 58},
                    {base_stat: 58},
                ],
            isFavorite: false,
            lvl: 42,
            hp: 121,
            hpMax: 121
        },
        {
            name: "charizard",
            type: "fire",
            stats:
                [
                    {base_stat: 88},
                    {base_stat: 24},
                    {base_stat: 48},
                    {base_stat: 80},
                    {base_stat: 35},
                    {base_stat: 158},
                    {base_stat: 139},
                ],
            isFavorite: false,
            lvl: 37,
            hp: 158,
            hpMax: 158
        },
        {
            name: "mew",
            type: "psychic",
            stats:
                [
                    {base_stat: 88},
                    {base_stat: 24},
                    {base_stat: 88},
                    {base_stat: 80},
                    {base_stat: 35},
                    {base_stat: 457},
                    {base_stat: 428},
                ],
            isFavorite: false,
            lvl: 87,
            hp: 468,
            hpMax: 468
        },
        {
            name: "snorlax",
            type: "normal",
            stats:
                [
                    {base_stat: 88},
                    {base_stat: 24},
                    {base_stat: 48},
                    {base_stat: 80},
                    {base_stat: 35},
                    {base_stat: 489},
                    {base_stat: 287},
                ],
            isFavorite: false,
            lvl: 68,
            hp: 385,
            hpMax: 385
        },
        {
            name: "blastoise",
            type: "water",
            stats:
                [
                    {base_stat: 88},
                    {base_stat: 24},
                    {base_stat: 48},
                    {base_stat: 80},
                    {base_stat: 35},
                    {base_stat: 348},
                    {base_stat: 27},
                ],
            isFavorite: false,
            lvl: 68,
            hp: 385,
            hpMax: 385
        }
    ];

    const pushNew = () => {
        model.push(newPokemon);
        setPokemonTeam(model);
    };

    const pokemonInLocal = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/squirtle")
            .then(response => response.data)
            .then(data => {
                let fetchedPokemon = data;
                setNewPokemon(fetchedPokemon)
            })
    };

    useEffect(() => {
        setPokemonTeam(model);
    }, []);

    return (
        <div className="teamPokemonRender">
            <button onClick={pokemonInLocal}>API request</button>
            <button onClick={pushNew}>Push new</button>
            {/*The 6 pokémons*/}
            <div className="teamPokemonContainer">
                {pokemonTeam.map((element, index) => {
                    return (
                        <div onClick={() => showStats(element, index)}
                             className="pokemonCase"
                             key={index}
                        >
                            <PokemonCard
                                pokemonTeam={pokemonTeam}
                                pokemon={element}
                            />
                        </div>
                    )
                })
                }
            </div>
            {statsRequired ?
                <DisplayPokemonTeamStats
                    setTeamPokemon={setPokemonTeam}
                    teamPokemon={pokemonTeam}
                    pokemon={pokemonStat}
                    index={indexSelected}
                /> :
                <div className="tip">
                    <h1>Choose a Pokémon for more details</h1>
                </div>
            }
            <div className="navMenuFake">
                <img className="menuItem"img src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt=""/>
                <img className="menuItem" src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt=""/>
                <img className="menuItem" src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt=""/>
            </div>
        </div>
    )
};

export default TeamPokemon;