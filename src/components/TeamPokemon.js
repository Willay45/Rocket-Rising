import React, {useState, useEffect} from 'react';
import './TeamPokemon.css';
import axios from 'axios';
import DisplayPokemonTeamStats from './DisplayPokemonTeamStats';
import PokemonCard from './PokemonCard';
import model from './modelPokemons';


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

    const pushNew = () => {
        model.push(newPokemon);
        setPokemonTeam(model);
    };

    useEffect(() => {
        setPokemonTeam(model);
    }, []);

    return (
        <div className="teamPokemonRender">
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
                <img className="menuItem" src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt="charizard"/>
                <img className="menuItem" src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt="charizard"/>
                <img className="menuItem" src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt="charizard"/>
            </div>
        </div>
    )
};

export default TeamPokemon;