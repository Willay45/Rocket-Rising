import React from 'react';
import JsLifeBar from './JsLifeBar';
import './PokemonCard.css';

const PokemonCard = ({pokemon}) => {

    const getLvl = () => {
        for (let level = 0; level < 100; level++) {
            const expNeeded = Math.pow((level), 3);
            if (pokemon.curentXp > expNeeded / 2 && pokemon.curentXp < expNeeded + (expNeeded / 2)) {
                return level + 1;
            }
        }
    };

    return (
                <div className="cardContainer">
                    <div className="pokemonCard">
                        <div className="imgAndXp">
                            <img
                                className="pokemonImage"
                                src={`http://www.pokestadium.com/sprites/xy/${pokemon.name}.gif`}
                                alt="image of the pokemon"
                            />
                            <h3 className="pokeName">Lv.{getLvl()}</h3>
                            {pokemon.isFavorite ? <div className="favorite"/> : null}
                        </div>
                        <div className="pokemonStats">
                            <h1 className="pokeName">{pokemon.name}</h1>
                            <JsLifeBar pokemon={pokemon}/>
                        </div>
                    </div>
                </div>
    )
};

export default PokemonCard;