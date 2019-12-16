import React from 'react';
import JsLifeBar from "./JsLifeBar";
import './PokemonCard.css';

const PokemonCard = ({pokemonTeam, index, pokemon}) => {



    return (
        <div>
            <div>
                <div className="cardContainer">
                    <div className="pokemonCard">
                        <div className="imgAndXp">
                            <img
                                className="pokemonImage"
                                src={`http://www.pokestadium.com/sprites/xy/${pokemon.name}.gif`}
                                alt="img"
                            />
                            <h3 className="pokeName">Lv.{pokemon.lvl}</h3>
                            <div className="favorite"/>
                        </div>
                        <div className="pokemonStats">
                            <h1 className="pokeName">{pokemon.name}</h1>
                            <JsLifeBar pokemon={pokemon}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PokemonCard;