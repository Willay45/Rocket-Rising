import React, {useState, useEffect} from "react";
import "./PokeCenter.css";
import NavBar from "./NavBar";

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
            let currentLife = element.base_Stats.hp.current;
            let baseLife = element.base_Stats.hp.base;
            if (currentLife < baseLife) {
                console.log("pokemon is low life")
                element.base_Stats.hp.current = baseLife;
                alert("Your team has been successfully healed !");
            }
        });
        console.log(stockTeam);
        setPokemonTeam(stockTeam);
        localStorage.setItem('pokemonTeam', JSON.stringify(pokemonTeam));
    };

    return (
        <div className="PokeCenterContainer">
            <div className="pc"/>
            <div onClick={nurseHeal} className="joelle"/>

            <div className="tipsPokeCenter">
                <div>
                    <p className="doubleTipsPokeCenter">Click on the nursery to heal your pokémon team !</p>
                    <p className="doubleTipsPokeCenter">Or click on the PC to manage your pokémons</p>
                </div>
                <NavBar className="navBarPokeCenter"/>
            </div>
        </div>
    )
};

export default PokeCenter;