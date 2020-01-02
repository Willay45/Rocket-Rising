import React, {useState, useEffect} from 'react';
import './PokePC.css'
import {Link} from "react-router-dom";
import PokeCenter from "./PokeCenter";
import PokemonCard from "./PokemonCard";

const PokePC = () => {
    const [pokemonTeam, setPokemonTeam] = useState(null);
    const [pokemonPC, setPokemonPC] = useState(null);

    useEffect(() => {
        let stockTeam = JSON.parse(localStorage.getItem('pokemonTeam'));
        setPokemonTeam(stockTeam);
        console.log(stockTeam);
        let stockPc = JSON.parse(localStorage.getItem('playerPC'));
        setPokemonPC(stockPc);
    }, []);



    return (
        <div className="pcContainer">
            <div>
                <h1 className="computerTitle">Personal computer</h1>
            </div>
            <div className="pcInterface">
                <div className="leftColumnPC">
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
                <div className="rightColumnPC">
                    {
                        pokemonPC ?
                            pokemonPC.map((element) => {
                                return(
                                    <div>
                                        <PokemonCard pokemon={element}/>
                                    </div>
                                )
                            })
                            :
                            null
                    }
                </div>
            </div>
            <Link className="linkToPokeCenter" to="/pokeCenter"><p className="exitButton">Exit</p></Link>
        </div>
    )
};

export default PokePC;