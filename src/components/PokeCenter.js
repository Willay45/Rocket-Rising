import React, {useState, useEffect} from "react";
import "./PokeCenter.css";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";
import MusicService from "../tech/MusicService";

const PokeCenter = () => {
    const [pokemonTeam, setPokemonTeam] = useState(null);
    const [needHeal, setNeedHeal] = useState(null);

    useEffect(() => {
        let stockTeam = JSON.parse(localStorage.getItem('pokemonTeam'));
        setPokemonTeam(stockTeam);
        MusicService.play('pokemonCenterMusic');
    }, []);

    const nurseHeal = () => {
        let stockTeam = pokemonTeam;
        stockTeam.map((element) => {
            let currentLife = element.curentHp;
            let baseLife = element.baseStats.hp.base;
            if (currentLife < baseLife) {
                MusicService.play('healPokemonCenter');
                setTimeout(() => {
                    setNeedHeal(true);
                    element.baseStats.hp.current = baseLife;
                }, 3000);
            } else {
                setNeedHeal(false);
            }
        });
        setPokemonTeam(stockTeam);
        localStorage.setItem('pokemonTeam', JSON.stringify(stockTeam));
    };

    return (
        <div className="PokeCenterContainer">
            <div onClick={nurseHeal} className="joelle"/>
            {
                needHeal === true &&
                <div className="messagePokeCenter">
                    <h1>Nurse Joelle:</h1>
                    <p>Give me your Pokémons and I will heal them !</p>
                </div>
            }
            {
                needHeal === false &&
                <div className="messagePokeCenter">
                    <h1>Nurse Joelle:</h1>
                    <p>Your Pokémons are in good health! Come back if you injure them</p>
                </div>
            }
            {
                needHeal === true || needHeal === false ?
                    <button className="okButtonPokeCenter" onClick={() => {
                        setNeedHeal(null)
                    }}>OK</button>
                    : null
            }
            <div className="tipsPokeCenter">
                {
                    needHeal === null ?
                        <div className="doubleTipsContainerPokeCenter">
                            <p className="doubleTipsPokeCenter">Click on the nurse to heal your pokémon team !</p>
                            <p className="doubleTipsPokeCenter">Or click on the PC to manage your pokémons</p>
                        </div>
                        : null}
                <NavBar className="navBarPokeCenter"/>
            </div>
        </div>
    )
};

export default PokeCenter;