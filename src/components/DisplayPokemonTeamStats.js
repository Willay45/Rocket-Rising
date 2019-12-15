import React from 'react';
import './DisplayPokemonTeamStats.js.css'

const DisplayPokemonTeamStats = ({pokemon}) => {
    return (
        <div className="statsContainer">
            <div className="header">
                <img className="pokemonStatsImage"
                     src={`http://www.pokestadium.com/sprites/xy/${pokemon.name}.gif`}
                     alt={pokemon.name}/>
                <div className="nameAndLvl">
                    <h1 className="statsName">{pokemon.name}</h1>
                    <p>Lv. todo</p>
                </div>
            </div>
            <div className="typesStats">
                {pokemon.types ? <p>{pokemon.types[0].type.name}</p> : null}
                {pokemon.types && pokemon.types[1] ? <p>{pokemon.types[1].type.name}</p> : null}
            </div>

            {/*Statistics of the selected pokemon*/}
            <div className="movesAndStats">
                <div className="statsRender">
                    <div className="twoColumns">
                        <div className="leftStats">
                            <p className="itemStats">Speed : {pokemon.stats[0].base_stat}</p>
                            <p className="itemStats">Special defense : {pokemon.stats[1].base_stat}</p>
                            <p className="itemStats">Special attack : {pokemon.stats[2].base_stat}</p>
                        </div>
                        <div className="rightStats">
                            <p className="itemStats">Defense : {pokemon.stats[3].base_stat}</p>
                            <p className="itemStats">Attack : {pokemon.stats[4].base_stat}</p>
                            <p className="itemStats">HP : {pokemon.stats[5].base_stat}</p>
                        </div>
                    </div>
                    <div className="movesStats">
                        <h4>MOVES LEARNED</h4>
                        <p className="itemSpell">Fire punch</p>
                        <p className="itemSpell">Fly</p>
                        <p className="itemSpell">Tunnel</p>
                        <p className="itemSpell">Quenouille</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DisplayPokemonTeamStats;