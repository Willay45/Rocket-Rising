import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import "./BattleTeamPokemon.css";

const BattleTeamPokemon = () => {

    const [pokemonTeam, setPokemonTeam] = useState([]);
    const [indexSelected, setIndexSelected] = useState(null);

    useEffect(() => {
        const localTeam = JSON.parse(localStorage.getItem('pokemonTeam'));
        setPokemonTeam(localTeam);
    }, []);


    return (
        <div className="teamPokemon">




                <div className="team">
                    {pokemonTeam.map((pokemon, index) => <PokemonCard pokemon={pokemon} index={index}/>)}

                </div>

                <div className="choose">
                    <button>Back</button>
                    <button>Change</button>
                </div>
        </div>


    )
};

export default BattleTeamPokemon;