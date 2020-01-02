import React from "react";
import "./GameSceneBattlefield.css";


const GameSceneBattlefield = ({scene, opponentActivePokemon, playerActivePokemon, discussion}) => {


    const playerPokemonSpriteBack = playerActivePokemon.getSpriteBackUrl();
    const opponentPokemonSpriteFront = opponentActivePokemon.getSpriteFrontUrl();

    const lifeToCent = () => {
        let toCent = playerActivePokemon.getCurentHp() * 150 / playerActivePokemon.baseStats.hp.current;
        return(toCent);
    };
    const lifeToCentOpponent = () => {
        let toCent = opponentActivePokemon.getCurentHp() * 150 /opponentActivePokemon.baseStats.hp.current;
        return(toCent);
    };

    return(
        <div className="GameSceneBattlefield">
            <div className="battlefield" style={{backgroundImage:`url(${scene.getBackground()})`, position: 'relative'}}>
                <div className="pnj" style={{display: discussion ? "block" : "none"}}>
                    <img src= {scene.getOpponentImage()} alt="pnj"/>
                </div>
                <div className="opponent" style={{display: discussion ? "none" : "block"}}>
                    <div className="statBox">
                        <span className="pokemonName">{opponentActivePokemon.getName()}</span>
                        <span className="pokemonLvl">Lv{opponentActivePokemon.getLevel()}</span>
                        <div className="lifeBar">
                            <div style={{ backgroundColor: 'grey',
                                width: '150px',
                                height: '6px',
                                marginTop: '10px',
                                borderRadius: '5px'}}>
                                <div style={{ backgroundColor: 'red',
                                    width: `${lifeToCentOpponent()}px`,
                                    height: '6px',
                                    marginTop: '10px',
                                    borderRadius: '5px'}}
                                ></div></div>
                            <p>Hp: {opponentActivePokemon.getCurentHp()}/{opponentActivePokemon.baseStats.hp.current}</p>
                        </div>
                    </div>
                    <img src={opponentPokemonSpriteFront} alt="player"/>
                </div>


                <div className="player" style={{display: discussion ? "none" : "block"}}>
                    <img src={playerPokemonSpriteBack} alt="player"/>
                    <div className="statBox">
                        <span className="pokemonName">{playerActivePokemon.getName()}</span>
                        <span className="pokemonLvl">Lv{playerActivePokemon.getLevel()}</span>
                        <div className="lifeBar">
                            <div style={{ backgroundColor: 'grey',
                                width: '150px',
                                height: '6px',
                                marginTop: '10px',
                                borderRadius: '5px'}}>
                                <div style={{ backgroundColor: 'red',
                                    width: `${lifeToCent()}px`,
                                    height: '6px',
                                    marginTop: '10px',
                                    borderRadius:'5px'}}
                                ></div></div>
                            <p>Hp: {playerActivePokemon.getCurentHp()}/{playerActivePokemon.baseStats.hp.current}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GameSceneBattlefield;