import React, {useState, useEffect} from "react";
import "./PokeCenter.css";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

const PokeCenter = () => {
    const [pokemonTeam, setPokemonTeam] = useState(null);

    useEffect(() => {
        let stockTeam = JSON.parse(localStorage.getItem('pokemonTeam'));
        console.log(stockTeam);
        setPokemonTeam(stockTeam);
    }, []);

    const nurseHeal = () => {
        let stockTeam = pokemonTeam;
        stockTeam.map((element) => {
            let currentLife = element.baseStats.hp.current;
            let baseLife = element.baseStats.hp.base;
            if (currentLife < baseLife) {
                element.baseStats.hp.current = baseLife;
                alert("Your team has been successfully healed !");
            } else {
                alert("Your team can not been saved right now")
            }
        });
        console.log(stockTeam);
        setPokemonTeam(stockTeam);
        localStorage.setItem('pokemonTeam', JSON.stringify(pokemonTeam));
    };

    return (
        <div className="PokeCenterContainer">
            <div onClick={nurseHeal} className="joelle"/>
            <div className="tipsPokeCenter">
                <div className="doubleTipsContainerPokeCenter">
                    <p className="doubleTipsPokeCenter">Click on the nurse to heal your pokémon team !</p>
                    <p className="doubleTipsPokeCenter">Or click on the PC to manage your pokémons</p>
                </div>
                <NavBar className="navBarPokeCenter"/>
            </div>
        </div>
    )
};

export default PokeCenter;