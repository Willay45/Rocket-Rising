import React, {useState, useEffect} from 'react';
import './TestTeam.css';
import axios from 'axios'
import DisplayPokemonTeamStats from "./DisplayPokemonTeamStats";
import JsLifeBar from "./JsLifeBar";

const TestTeam = () => {
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

    const addPokemon = () => {
        setPokemonTeam(model);
    };

    useEffect(() => {
        addPokemon();
    }, [nbPokemon]);


    console.log(pokemonTeam);
    return (
        <div className="pokeTeamContainer">
            <button onClick={pokemonInLocal}>API request</button>
            <button onClick={testLocalMemory}>Show me the local save</button>
            <button onClick={pushNew}>Push new</button>
            {/*The 6 pokémons*/}
            <div>
                <div className="twoFirst">
                    { pokemonTeam[0] ?
                            <div>
                                    <div className="cardContainer">
                                        <div className="pokemonCard">
                                            <div className="imgAndXp">
                                                <img
                                                    className="pokemonImage"
                                                    src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[0].name}.gif`}
                                                    alt="img"
                                                />
                                                <h3 className="pokeName">Lv.{pokemonTeam[0].lvl}</h3>
                                                {/*Show the favorite pokemon*/}
                                                <div className="favorite"/>
                                            </div>
                                            <div className="pokemonStats">
                                                <h1 className="pokeName">{pokemonTeam[0].name}</h1>
                                                <JsLifeBar pokemon={pokemonTeam[0]}/>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        : null}
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

export default TestTeam;