import React, {useState, useEffect} from 'react';
import './TeamPokemon.css';
import axios from 'axios';
import DisplayPokemonTeamStats from './DisplayPokemonTeamStats';
import PokemonCard from './PokemonCard';
import NavBar from "./NavBar";
import randomNumber from "../services/RandomNumber";
import PokemonFactory from "../factories/PokemonFactory";


const TeamPokemon = () => {
    const [pokemonTeam, setPokemonTeam] = useState([]);
    const [statsRequired, setStatsRequired] = useState(false);
    const [pokemonStat, setPokemonStat] = useState({});
    const [indexSelected, setIndexSelected] = useState(null);
    const [newPokemon, setNewPokemon] = useState(null);

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

    const closeStats = () => {
        setStatsRequired(false);
    };

    const addRandomPokemonToTeam = () => {
        PokemonFactory.get(randomNumber(1,255), 10).then(data => {
            console.log(data);
            setNewPokemon(data);
            let theTeam = pokemonTeam;
            theTeam.push(data);
            console.log(theTeam);
            setPokemonTeam(theTeam);
            localStorage.setItem('pokemonTeam', JSON.stringify(theTeam));
        });
    };

    return (
        <div className="teamPokemonRender">
            <div className="pokemonTeamTitleContainer">
                {/*The 6 pokémons*/}
                <div className="teamPokemonContainer">
                    <h1 className="pokemonTeam-title">Pokemon Team</h1>
                    {pokemonTeam.length > 0 ?
                        (pokemonTeam.concat(Array(6 - pokemonTeam.length).fill(null))).map((element, index) => {
                        return (
                            <div onClick={() => { element && showStats(element, index)}}
                                 className="pokemonCase"
                                 key={index}
                                 style={{color: 'white'}}
                            >
                                { element && <PokemonCard
                                    pokemonTeam={pokemonTeam}
                                    pokemon={element}
                                /> }
                            </div>
                        )
                    })
                        :
                        null
                    }
                    {statsRequired ?
                        <DisplayPokemonTeamStats
                            closeStats={closeStats}
                            setTeamPokemon={setPokemonTeam}
                            teamPokemon={pokemonTeam}
                            pokemon={pokemonStat}
                            index={indexSelected}
                        /> :
                        <div className="tip">
                            <h1>Choose a Pokémon for more details</h1>
                        </div>
                    }
                </div>
            </div>
            <NavBar/>
        </div>
    )
};

export default TeamPokemon;