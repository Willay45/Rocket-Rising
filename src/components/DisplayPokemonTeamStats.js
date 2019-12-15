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
            {pokemon.types ? <p>{pokemon.types[0].type.name}</p> : null}
            {pokemon.types && pokemon.types[1] ? <p>{pokemon.types[1].type.name}</p> : null}
            {/*Statistics of the selected pokemon*/}
            <div className="movesAndStats">
                <div className="statsRender">
                    <div className="leftStats">
                        <p>Speed : {pokemon.stats[0].base_stat}</p>
                        <p>Special defense : {pokemon.stats[1].base_stat}</p>
                        <p>Special attack : {pokemon.stats[2].base_stat}</p>
                    </div>
                    <div className="rightStats">
                        <p>Defense : {pokemon.stats[3].base_stat}</p>
                        <p>Attack : {pokemon.stats[4].base_stat}</p>
                        <p>HP : {pokemon.stats[5].base_stat}</p>
                    </div>
                    <div className="movesStats">
                        <h4>MOVES LEARNED</h4>
                        <p>Fire punch</p>
                        <p>Fly</p>
                        <p>Tunnel</p>
                        <p>Quenouille</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DisplayPokemonTeamStats;