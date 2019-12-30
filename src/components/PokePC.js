import React, {useState, useEffect} from 'react';
import './PokePC.css'
import {Link} from "react-router-dom";
import PokeCenter from "./PokeCenter";
import PokemonCard from "./PokemonCard";

const PokePC = () => {
    const [pokemonTeam, setPokemonTeam] = useState(null);
    const [pokemonPC, setPokemonPC] = useState(null);

    useEffect(() => {
        let stockPC = JSON.parse(localStorage.getItem('pokemonTeam'));
        setPokemonPC(stockPC);
    }, []);

    useEffect(() => {
        let stockTeam = JSON.parse(localStorage.getItem('pokemonTeam'));
        setPokemonTeam(stockTeam);
        console.log(stockTeam);
    }, []);



    return (
        <div className="pcContainer">
            <div>
                <h1 className="computerTitle">Personal computer</h1>
            </div>
            <div>
                {
                    pokemonTeam ?
                        pokemonTeam.map((element) => {
                            return (
                                <div>
                                    <PokemonCard pokemon={element}/>
                                </div>
                            )
                        })
                        :
                        null
                }
            </div>
            <Link className="linkToPokeCenter" to="/pokeCenter"><p className="exitButton">Exit</p></Link>
        </div>
    )
};

export default PokePC;