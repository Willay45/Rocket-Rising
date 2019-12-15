import React, {useState, useEffect} from 'react';
import './TeamPokemon.css';
import axios from 'axios'
import starterPack from "../datas/starters";
import DisplayPokemonTeamStats from "./DisplayPokemonTeamStats";

const TeamPokemon = () => {
    const [pokemonTeam, setPokemonTeam] = useState({});
    const [nbPokemon, setNbPokemon] = useState(0);
    const [newPokemon, setNewPokemon] = useState({});
    const [localData, setLocalData] = useState(() => {
        localStorage.getItem('fetched pokemon')
    });
    const [statsRequired, setStatsRequired] = useState(false);
    const [pokemonStat, setPokemonStat] = useState({});

    const showStats = (index) => {
        setStatsRequired(true);
        let selectedPokemon = pokemonTeam[index];
        setPokemonStat(selectedPokemon);
        console.log(selectedPokemon)
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
                    {base_stat: 97},
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
                    {base_stat: 97},
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
                    {base_stat: 48},
                    {base_stat: 80},
                    {base_stat: 35},
                    {base_stat: 97},
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
                    {base_stat: 97},
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
                    {base_stat: 97},
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
        console.log(model)
        setPokemonTeam(model)
    };

    const pokemonInLocal = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/squirtle")
            .then(response => response.data)
            .then(data => {
                console.log("Je suis la requete API :");
                console.log(data);
                let fetchedPokemon = data;
                setNewPokemon(fetchedPokemon)
            })
    };

    useEffect(() => {
        localStorage.setItem('fetched pokemon', JSON.stringify(pokemonTeam))
    }, [pokemonTeam]);


    const testLocalMemory = () => {
        let savedData = JSON.parse(localStorage.getItem('fetched pokemon'));
        console.log("Je suis la sauvegarde locale :");
        console.log(savedData)
    };

    const consoleTest = () => {
        console.log(pokemonTeam);
    };

    const addPokemon = () => {
        setPokemonTeam(model);
    };

    useEffect(() => {
        addPokemon();
    }, [nbPokemon]);

    return (
        <div className="pokeTeamContainer">
            <button onClick={pokemonInLocal}>API request</button>
            <button onClick={testLocalMemory}>Show me the local save</button>
            <button onClick={pushNew}>Push new</button>
            <div className="twoFirst">
                {/*first pokemon*/}
                {pokemonTeam ?
                    <div onClick={() => {
                        showStats(0)
                    }}
                         className="pokemonCase case1">
                        {pokemonTeam[0] ?
                            <div className="pokemonCard">
                                <div className="imgAndXp">
                                    <img
                                        className="pokemonImage"
                                        src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[0].name}.gif`}
                                        alt="img"
                                    />
                                    <h3 className="pokeName">Lv.{pokemonTeam[0].lvl}</h3>
                                </div>
                                <div className="pokemonStats">
                                    <h1 className="pokeName">{pokemonTeam[0].name}</h1>
                                    <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                         alt="life bar"/>
                                    <div className="lifeStatus">
                                        <h3 className="pokeHp">{pokemonTeam[0].hp}/ </h3>
                                        <h3 className="pokeHp">{pokemonTeam[0].hpMax}</h3>
                                    </div>
                                </div>
                            </div>
                            : null}
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
                                    <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                         alt="life bar"/>
                                    <div className="lifeStatus">
                                        <h3 className="pokeHp">{pokemonTeam[1].hp}/ </h3>
                                        <h3 className="pokeHp">{pokemonTeam[1].hpMax}</h3>
                                    </div>
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
                                    <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                         alt="life bar"/>
                                    <div className="lifeStatus">
                                        <h3 className="pokeHp">{pokemonTeam[2].hp}/ </h3>
                                        <h3 className="pokeHp">{pokemonTeam[2].hpMax}</h3>
                                    </div>
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
                                        <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                             alt="life bar"/>
                                        <div className="lifeStatus">
                                            <h3 className="pokeHp">{pokemonTeam[3].hp}/ </h3>
                                            <h3 className="pokeHp">{pokemonTeam[3].hpMax}</h3>
                                        </div>
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
                                        <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                             alt="life bar"/>
                                        <div className="lifeStatus">
                                            <h3 className="pokeHp">{pokemonTeam[4].hp}/ </h3>
                                            <h3 className="pokeHp">{pokemonTeam[4].hpMax}</h3>
                                        </div>
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
                                        <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                             alt="life bar"/>
                                        <div className="lifeStatus">
                                            <h3 className="pokeHp">{pokemonTeam[5].stats[5].base_stat}/ </h3>
                                            <h3 className="pokeHp">{pokemonTeam[5].stats[5].base_stat}</h3>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>
                        : null
                }
            </div>
            { statsRequired ?
                <DisplayPokemonTeamStats
                pokemon={pokemonStat}
            /> : null
            }
            { statsRequired ? null :
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