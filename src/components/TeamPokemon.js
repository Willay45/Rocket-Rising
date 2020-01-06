import React, {useState, useEffect} from 'react';
import './TeamPokemon.css';
import axios from 'axios';
import DisplayPokemonTeamStats from './DisplayPokemonTeamStats';
import PokemonCard from './PokemonCard';
import NavBar from "./NavBar";
import randomNumber from "../services/RandomNumber";


const TeamPokemon = () => {
    const [pokemonTeam, setPokemonTeam] = useState([]);
    const [statsRequired, setStatsRequired] = useState(false);
    const [pokemonStat, setPokemonStat] = useState({});
    const [indexSelected, setIndexSelected] = useState(null);

    useEffect(() => {
        const localTeam = JSON.parse(localStorage.getItem('pokemonTeam'));
        setPokemonTeam(localTeam);
    }, []);

    const showStats = (element, index) => {
        setStatsRequired(true);
        let selectedPokemon = element;
        setIndexSelected(index);
        setPokemonStat(selectedPokemon);
    };

    const addPokemonToTeam = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber(0, 250)}`)
            .then(response => response.data)
            .then(data => {
                const copyTeam = pokemonTeam;
                const randomPokemon = [data];
                copyTeam.push(...randomPokemon);
                localStorage.setItem('randomPokemon', JSON.stringify(pokemonTeam));
            });
    };

    return (
        <div className="teamPokemonRender">
            <h1>Team Pokemon</h1>
            <div className="pokemonTeamTitleContainer"/>
            {/*The 6 pokémons*/}
            <div className="teamPokemonContainer">
                {pokemonTeam.length > 0 ?
                    pokemonTeam.map((element, index) => {
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
                    :
                    null
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
            <NavBar/>
        </div>
    )
};

export default TeamPokemon;