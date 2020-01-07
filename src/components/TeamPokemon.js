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
                    }
                </div>
            </div>
            <NavBar/>
        </div>
    )
};

export default TeamPokemon;