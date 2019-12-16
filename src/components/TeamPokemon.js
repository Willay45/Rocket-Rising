import React, {useState, useEffect} from 'react';
import './TeamPokemon.css';
import axios from 'axios';
import DisplayPokemonTeamStats from './DisplayPokemonTeamStats';
import JsLifeBar from './JsLifeBar';
import PokemonCard from "./PokemonCard";

const TeamPokemon = () => {
    const [pokemonTeam, setPokemonTeam] = useState({});
    const [nbPokemon, setNbPokemon] = useState(0);
    const [newPokemon, setNewPokemon] = useState({});
    const [localData, setLocalData] = useState(() => {
        localStorage.getItem('fetched pokemon')
    });
    const [statsRequired, setStatsRequired] = useState(false);
    const [pokemonStat, setPokemonStat] = useState({});
    const [indexSelected, setIndexSelected] = useState(null);

    const showStats = (index) => {
        setStatsRequired(true);
        let selectedPokemon = pokemonTeam[index];
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
            lvl: 68,
            hp: 385,
            hpMax: 385
        }
    ];
    let imNew = {
        name: "lapras",
        type: "water",
        stats:
            [
                {base_stat: 88},
                {base_stat: 24},
                {base_stat: 48},
                {base_stat: 80},
                {base_stat: 35},
                {base_stat: 97},
            ],
        lvl: 74,
        hp: 584,
        hpMax: 584
    };

    const pushNew = () => {
        model.push(newPokemon);
        setPokemonTeam(model)
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
        //localStorage.setItem('fetched pokemon', JSON.stringify(pokemonTeam))
    }, [pokemonTeam]);


    const testLocalMemory = () => {
        let savedData = JSON.parse(localStorage.getItem('fetched pokemon'));
    };

    const addPokemon = () => {
        setPokemonTeam(model);
    };

    useEffect(() => {
        addPokemon();
    }, []);

    return (
        <div className="pokeTeamContainer">
            <button onClick={pokemonInLocal}>API request</button>
            <button onClick={testLocalMemory}>Show me the local save</button>
            <button onClick={pushNew}>Push new</button>
            {/*The 6 pokémons*/}
            <div>
                <div className="twoFirst">
                    {/*first pokemon*/}
                    {pokemonTeam ?
                        <div onClick={() => {
                            showStats(0);
                        }}
                             className="pokemonCase case1">
                            {pokemonTeam[0] ?
                                <PokemonCard
                                    pokemonTeam={pokemonTeam}
                                    index={0}
                                    pokemon={pokemonTeam[0]}
                                /> : null}
                            {/*<div className="pokemonCard">*/}
                            {/*    <div className="imgAndXp">*/}
                            {/*        <img*/}
                            {/*            className="pokemonImage"*/}
                            {/*            src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[0].name}.gif`}*/}
                            {/*            alt="img"*/}
                            {/*        />*/}
                            {/*        <h3 className="pokeName">Lv.{pokemonTeam[0].lvl}</h3>*/}
                            {/*        /!*Show the favorite pokemon*!/*/}
                            {/*        <div className="favorite"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="pokemonStats">*/}
                            {/*        <h1 className="pokeName">{pokemonTeam[0].name}</h1>*/}
                            {/*        <JsLifeBar pokemon={pokemonTeam[0]}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*: null}*/}
                        </div>
                        : null
                    }
                    {/*second pokemon*/}
                    {pokemonTeam ?
                        <div onClick={() => {
                            showStats(1)
                        }}
                             className="pokemonCase case2">
                            {pokemonTeam[1] ?
                                <div className="pokemonCard">
                                    <div className="imgAndXp">
                                        <img
                                            className="pokemonImage"
                                            src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[1].name}.gif`}
                                            alt="img"
                                        />
                                        <h3 className="pokeName">Lv.{pokemonTeam[1].lvl}</h3>
                                    </div>
                                    <div className="pokemonStats">
                                        <h1 className="pokeName">{pokemonTeam[1].name}</h1>
                                        <JsLifeBar pokemon={pokemonTeam[1]}/>
                                    </div>
                                </div>
                                : null}
                        </div>
                        : null
                    }
                </div>
                <div className="twoSecond">
                    {/*third pokemon*/}
                    {pokemonTeam ?
                        <div onClick={() => {
                            showStats(2)
                        }}
                             className="pokemonCase case1">
                            {pokemonTeam[2] ?
                                <div className="pokemonCard">
                                    <div className="imgAndXp">
                                        <img
                                            className="pokemonImage"
                                            src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[2].name}.gif`}
                                            alt="img"
                                        />
                                        <h3 className="pokeName">Lv.{pokemonTeam[2].lvl}</h3>
                                    </div>
                                    <div className="pokemonStats">
                                        <h1 className="pokeName">{pokemonTeam[2].name}</h1>
                                        <JsLifeBar pokemon={pokemonTeam[2]}/>
                                    </div>
                                </div>
                                : null}
                        </div>
                        : null
                    }
                    {/*fourth pokemon*/}
                    {pokemonTeam ?
                        <div onClick={() => {
                            showStats(3)
                        }}
                             className="pokemonCase case2">
                            {
                                pokemonTeam[3] ?
                                    <div className="pokemonCard">
                                        <div className="imgAndXp">
                                            <img
                                                className="pokemonImage"
                                                src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[3].name}.gif`}
                                                alt="img"
                                            />
                                            <h3 className="pokeName">Lv.{pokemonTeam[3].lvl}</h3>
                                        </div>
                                        <div className="pokemonStats">
                                            <h1 className="pokeName">{pokemonTeam[3].name}</h1>
                                            <JsLifeBar pokemon={pokemonTeam[3]}/>
                                        </div>
                                    </div>
                                    : null
                            }
                        </div>
                        : null
                    }
                </div>
                <div className="twoThird">
                    {/*fifth pokemon*/}
                    {
                        pokemonTeam ?
                            <div onClick={() => {
                                showStats(4)
                            }}
                                 className="pokemonCase case1">
                                {pokemonTeam[4] ?
                                    <div className="pokemonCard">
                                        <div className="imgAndXp">
                                            <img
                                                className="pokemonImage"
                                                src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[4].name}.gif`}
                                                alt="img"
                                            />
                                            <h3 className="pokeName">Lv.{pokemonTeam[4].lvl}</h3>
                                        </div>
                                        <div className="pokemonStats">
                                            <h1 className="pokeName">{pokemonTeam[4].name}</h1>
                                            <JsLifeBar pokemon={pokemonTeam[4]}/>
                                        </div>
                                    </div>
                                    : null}
                            </div>
                            : null
                    }
                    {/*sixth pokemon*/}
                    {
                        pokemonTeam ?
                            <div className="pokemonCase case2">
                                {pokemonTeam[5] ?
                                    <div onClick={() => {
                                        showStats(5)
                                    }}
                                         className="pokemonCard">
                                        <div className="imgAndXp">
                                            <img
                                                className="pokemonImage"
                                                src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[5].name}.gif`}
                                                alt="img"
                                            />
                                            <h3 className="pokeName">Lv.{pokemonTeam[5].lvl}</h3>
                                        </div>
                                        <div className="pokemonStats">
                                            <h1 className="pokeName">{pokemonTeam[5].name}</h1>
                                            <JsLifeBar pokemon={pokemonTeam[5]}/>
                                        </div>
                                    </div>
                                    : null}
                            </div>
                            : null
                    }
                </div>
            </div>
            {statsRequired ?
                <DisplayPokemonTeamStats
                    setTeamPokemon={setPokemonTeam}
                    teamPokemon={pokemonTeam}
                    pokemon={pokemonStat}
                    index={indexSelected}
                /> : null
            }
            {statsRequired ? null :
                <div className="tip">
                    <h1>Choose a Pokémon for more details</h1>
                </div>
            }
            <div className="navMenuFake">
                <img className="menuItem" src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt=""/>
                <img className="menuItem" src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt=""/>
                <img className="menuItem" src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt=""/>
            </div>
        </div>
    )
};

export default TeamPokemon;