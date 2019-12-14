import React, {useState} from 'react';
import './TeamPokemon.css';

const TeamPokemon = () => {
    const [pokemonTeam, setPokemonTeam] = useState({});

    const model = [
        {
            name: "pikachu",
            type: "electric",
            lvl: 42,
            hp: 121,
            hpMax: 121
        },
        {
            name: "charizard",
            type: "fire",
            lvl: 37,
            hp: 158,
            hpMax: 158
        },
        {
            name: "mew",
            type: "psychic",
            lvl: 87,
            hp: 468,
            hpMax: 468
        },
        {
            name: "snorlax",
            type: "normal",
            lvl: 68,
            hp: 385,
            hpMax: 385
        },
        {
            name: "blastoise",
            type: "water",
            lvl: 68,
            hp: 385,
            hpMax: 385
        }
    ];

    const consoleTest = () => {
        console.log(pokemonTeam);
    };

    const addPokemon = () => {
        setPokemonTeam(model);
    };

    return (
        <div className="pokeTeamContainer">
            <button onClick={addPokemon}>Add one</button>
            <button onClick={consoleTest}>Test</button>
            <div className="twoFirst">
                {/*first pokemon*/}
                {pokemonTeam ?
                    <div className="pokemonCase case1">
                        {pokemonTeam[0] ?
                            <div className="pokemonCard">
                                <div className="imgAndXp">
                                    <img
                                        className="pokemonImage"
                                        src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[0].name}.gif`}
                                        alt="img"
                                    />
                                    <h3 className="pokeName">Lv.{pokemonTeam[0].lvl}</h3>
                                </div>
                                <div className="pokemonStats">
                                    <h1 className="pokeName">{pokemonTeam[0].name}</h1>
                                    <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                         alt="life bar"/>
                                    <div className="lifeStatus">
                                        <h3 className="pokeHp">{pokemonTeam[0].hp}/ </h3>
                                        <h3 className="pokeHp">{pokemonTeam[0].hpMax}</h3>
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>
                    : null
                }
                {/*second pokemon*/}
                {pokemonTeam ?
                    <div className="pokemonCase case2">
                        {pokemonTeam[1] ?
                            <div className="pokemonCard">
                                <div className="imgAndXp">
                                    <img
                                        className="pokemonImage"
                                        src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[1].name}.gif`}
                                        alt="img"
                                    />
                                    <h3 className="pokeName">Lv.{pokemonTeam[1].lvl}</h3>
                                </div>
                                <div className="pokemonStats">
                                    <h1 className="pokeName">{pokemonTeam[1].name}</h1>
                                    <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                         alt="life bar"/>
                                    <div className="lifeStatus">
                                        <h3 className="pokeHp">{pokemonTeam[1].hp}/ </h3>
                                        <h3 className="pokeHp">{pokemonTeam[1].hpMax}</h3>
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>
                    : null
                }
            </div>
            <div className="twoSecond">
                {/*third pokemon*/}
                {pokemonTeam ?
                    <div className="pokemonCase case1">
                        {pokemonTeam[2] ?
                            <div className="pokemonCard">
                                <div className="imgAndXp">
                                    <img
                                        className="pokemonImage"
                                        src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[2].name}.gif`}
                                        alt="img"
                                    />
                                    <h3 className="pokeName">Lv.{pokemonTeam[2].lvl}</h3>
                                </div>
                                <div className="pokemonStats">
                                    <h1 className="pokeName">{pokemonTeam[2].name}</h1>
                                    <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                         alt="life bar"/>
                                    <div className="lifeStatus">
                                        <h3 className="pokeHp">{pokemonTeam[2].hp}/ </h3>
                                        <h3 className="pokeHp">{pokemonTeam[2].hpMax}</h3>
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>
                    : null
                }
                {/*fourth pokemon*/}
                {pokemonTeam ?
                    <div className="pokemonCase case2">
                        {
                            pokemonTeam[3] ?
                                <div className="pokemonCard">
                                    <div className="imgAndXp">
                                        <img
                                            className="pokemonImage"
                                            src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[3].name}.gif`}
                                            alt="img"
                                        />
                                        <h3 className="pokeName">Lv.{pokemonTeam[3].lvl}</h3>
                                    </div>
                                    <div className="pokemonStats">
                                        <h1 className="pokeName">{pokemonTeam[3].name}</h1>
                                        <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                             alt="life bar"/>
                                        <div className="lifeStatus">
                                            <h3 className="pokeHp">{pokemonTeam[3].hp}/ </h3>
                                            <h3 className="pokeHp">{pokemonTeam[3].hpMax}</h3>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                    : null
                }
            </div>

            <div className="twoThird">
                {/*fifth pokemon*/}
                {
                    pokemonTeam ?
                        <div className="pokemonCase case1">
                            {pokemonTeam[4] ?
                                <div className="pokemonCard">
                                    <div className="imgAndXp">
                                        <img
                                            className="pokemonImage"
                                            src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam[4].name}.gif`}
                                            alt="img"
                                        />
                                        <h3 className="pokeName">Lv.{pokemonTeam[4].lvl}</h3>
                                    </div>
                                    <div className="pokemonStats">
                                        <h1 className="pokeName">{pokemonTeam[4].name}</h1>
                                        <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                             alt="life bar"/>
                                        <div className="lifeStatus">
                                            <h3 className="pokeHp">{pokemonTeam[4].hp}/ </h3>
                                            <h3 className="pokeHp">{pokemonTeam[4].hpMax}</h3>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>
                        : null
                }
                {/*sixth pokemon*/}
                {
                    pokemonTeam ?
                        <div className="pokemonCase case2">
                            {pokemonTeam.name ?
                                <div className="pokemonCard">
                                    <div className="imgAndXp">
                                        <img
                                            className="pokemonImage"
                                            src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam.name}.gif`}
                                            alt="img"
                                        />
                                        <h3 className="pokeName">Lv.{pokemonTeam.lvl}</h3>
                                    </div>
                                    <div className="pokemonStats">
                                        <h1 className="pokeName">{pokemonTeam.name}</h1>
                                        <img className="lifeBar" src="http://pixelartmaker.com/art/e86a0a807bc9ffc.png"
                                             alt="life bar"/>
                                        <div className="lifeStatus">
                                            <h3 className="pokeHp">{pokemonTeam.hp}/ </h3>
                                            <h3 className="pokeHp">{pokemonTeam.hpMax}</h3>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>
                        : null
                }
            </div>
            <div className="tip">
                <h1>Choose a Pokémon for more details</h1>
            </div>
            <div className="navMenuFake">
                <img className="menuItem" src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt=""/>
                <img className="menuItem" src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt=""/>
                <img className="menuItem" src="http://www.pokestadium.com/sprites/xy/charizard.gif" alt=""/>
            </div>
        </div>
    )
};

export default TeamPokemon;