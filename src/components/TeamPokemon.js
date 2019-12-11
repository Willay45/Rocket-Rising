import React, {useState} from 'react';
import './TeamPokemon.css';

const TeamPokemon = () => {
    const [pokemonTeam, setPokemonTeam] = useState({});

    const model = {
        name: "pikachu",
        type: "electric"
    };

    const consoleTest = () => {
        console.log(pokemonTeam);
    };

    const addPokemon = () => {
        setPokemonTeam(model);
    };

    return (
        <div className="pokeTeamContainer">
            <h1>Hello</h1>
            <button onClick={addPokemon}>Add one</button>
            <button onClick={consoleTest}>Test</button>
            <div className="threeFirst">
                {pokemonTeam.name ?
                    pokemonTeam.map((pokemon) => {

                    })
                })

                    <div className="pokemonCase">
                        <img src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam.name}.gif`}
                             alt="img"
                        />
                        <h1 className="pokeName">{pokemonTeam.name}</h1>
                        <h1 className="pokeName">{pokemonTeam.type}</h1>
                    </div>
                    : null
                }

                {/*<div className="pokemonCase case1">*/}
                {/*    {pokemonTeam.name ?*/}
                {/*        <div>*/}
                {/*            <img src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam.name}.gif`}*/}
                {/*                 alt="img"*/}
                {/*            />*/}
                {/*            <h1 className="pokeName">{pokemonTeam.name}</h1>*/}
                {/*            <h1 className="pokeName">{pokemonTeam.type}</h1>*/}
                {/*        </div>*/}
                {/*        : null}*/}
                {/*</div>*/}
                {/*<div className="pokemonCase case2">*/}
                {/*    {pokemonTeam.name ?*/}
                {/*        <img src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam.name}.gif`}*/}
                {/*             alt="img"*/}
                {/*        /> : null}*/}
                {/*</div>*/}
                {/*<div className="pokemonCase case3">*/}
                {/*    {pokemonTeam.name ?*/}
                {/*        <img src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam.name}.gif`}*/}
                {/*             alt="img"*/}
                {/*        /> : null}*/}
                {/*</div>*/}
            </div>
            <div className="threeOther">
                <div className="pokemonCase case1">
                    {pokemonTeam.name ?
                        <div>
                            <img src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam.name}.gif`}
                                 alt="img"
                            />
                            <h1 className="pokeName">{pokemonTeam.name}</h1>
                            <h1 className="pokeName">{pokemonTeam.type}</h1>
                        </div>
                        : null}
                </div>
                <div className="pokemonCase case2">
                    {pokemonTeam.name ?
                        <img src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam.name}.gif`}
                             alt="img"
                        /> : null}
                </div>
                <div className="pokemonCase case3">
                    {pokemonTeam.name ?
                        <img src={`http://www.pokestadium.com/sprites/xy/${pokemonTeam.name}.gif`}
                             alt="img"
                        /> : null}
                </div>
            </div>
        </div>
    )
};

export default TeamPokemon;