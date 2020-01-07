import React, {useState, useEffect} from "react";
import "./PokeCenter.css";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";
import MusicService from "../tech/MusicService";

const PokeCenter = () => {
    const [pokemonTeam, setPokemonTeam] = useState(null);
    const [needHeal, setNeedHeal] = useState(null);
    const [timeOutMessage, setTimeOutMessage] = useState(true);

    useEffect(() => {
        let stockTeam = JSON.parse(localStorage.getItem('pokemonTeam'));
        setPokemonTeam(stockTeam);
        MusicService.play('pokemonCenterMusic');
    }, []);

    const nurseHeal = () => {
        let stockTeam = pokemonTeam;
        stockTeam.map((element) => {
            let currentLife = element.baseStats.hp.current;
            let baseLife = element.baseStats.hp.base;
            if (currentLife < baseLife || element.curentHp < baseLife) {
                MusicService.play('healPokemonCenter');
                setNeedHeal(true);
                setTimeout(() => {
                    element.baseStats.hp.current = baseLife;
                    element.curentHp = baseLife;
                    setTimeOutMessage(false);
                    setPokemonTeam(stockTeam);
                    localStorage.setItem('pokemonTeam', JSON.stringify(stockTeam));
                }, 3000);
                setPokemonTeam(stockTeam);
            } else {
                setNeedHeal(false);
            }
        });
    };

    return (
        <div className="PokeCenterContainer">
            <div onClick={nurseHeal} className="joelle"/>
            {
                needHeal === true &&
                <div className="messagePokeCenter">
                    <h1>Nurse Joelle:</h1>
                    {
                        timeOutMessage ?
                            <p>Give me your Pokémons and I will heal them !</p>
                            :
                            <div>
                                <p>Your Pokémon team has been successfully healed !</p>
                                <button className="okButtonPokeCenter" onClick={() => {
                                    setNeedHeal(null)
                                }}>OK</button>
                            </div>
                    }
                </div>
            }
            {
                needHeal === false &&
                <div className="messagePokeCenter">
                    <h1>Joelle:</h1>
                    <p>Your Pokémons are in good health! Come back if you injure them</p>
                    <button className="okButtonPokeCenter" onClick={() => {
                        setNeedHeal(null)
                    }}>OK</button>
                </div>
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