import React, {useState, useEffect} from 'react';
import './DisplayPokemonTeamStats.js.css';
import JsLifeBar from './JsLifeBar';

const DisplayPokemonTeamStats = ({pokemon, teamPokemon, index, setTeamPokemon, closeStats}) => {

    const [favorite, setFavorite] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);
    const getLvl = () => {
        for (let level = 0; level < 100; level++) {
            const expNeeded = Math.pow((level), 3);
            if (pokemon.curentXp > expNeeded / 2 && pokemon.curentXp < expNeeded + (expNeeded / 2)) {
                return level + 1;
            }
        }
    };

    const addToFavorite = (index) => {
        pokemon.isFavorite = true;
        let stock = teamPokemon.splice(index, 1, teamPokemon[index]);
        let stockFavorite = teamPokemon[index];
        setFavorite(stockFavorite);
        const pokemons = teamPokemon;
        pokemons.splice(index, 1);
        const pokemonTable = [stockFavorite, ...pokemons];
        setTeamPokemon(pokemonTable);
        localStorage.setItem('fetched pokemon', JSON.stringify(pokemonTable));
        setIsFavorite(true);
    };

    const removeFavorite = () => {
        setIsFavorite(false);
        pokemon.isFavorite = false;
        const stock = pokemon;
        const team = teamPokemon;
        team.splice(0, 1);
        const pokemonTeamNow = [stock, ...team];
        setTeamPokemon(pokemonTeamNow);
        localStorage.setItem('fetched pokemon', JSON.stringify(pokemonTeamNow));

    };

    return (
        <div className="statsContainer">
            <div className="header">
                {pokemon.isFavorite ? <div
                        onClick={removeFavorite}
                        className="favoritePokemon"
                    >
                        <p className="favoriteText">Remove to favorite</p>
                        <img alt="yellow star favorite remove"
                            className="favoriteStar"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
                        />
                    </div>
                    :
                    <div className="favoritePokemon"
                         onClick={() => {
                             addToFavorite(index);
                         }}
                    >
                        <p className="favoriteText">Add to favorite</p>
                        <img alt="favorite yellow star add"
                            className="favoriteStar"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
                        />
                    </div>}
                <img className="pokemonStatsImage"
                     src={`http://www.pokestadium.com/sprites/xy/${pokemon.name}.gif`}
                     alt={pokemon.name}/>
                <div className="nameAndLvl">
                    <h1 className="statsName">{pokemon.name.toUpperCase()}</h1>
                    <p>Lv.{getLvl()}</p>
                    <img onClick={closeStats} className="closeWindowIconDisplayPokemon" src="https://image.noelshack.com/fichiers/2020/01/6/1578154650-kisspng-computer-icons-window-button-actions-window-close-icon-5ab0da45ddb522-1926493715215396539081.png" alt="close window icon"/>
                </div>
            </div>
            <div className="typesStats">
                {pokemon.types ? <p>{pokemon.types[0].toUpperCase()}</p> : null}
                {pokemon.types && pokemon.types[1] ? <p>{pokemon.types[1].toUpperCase()}</p> : null}
            </div>

            {/*Statistics of the selected pokemon*/}
            <div className="movesAndStats">
                <div className="statsRender">
                    <div className="statistics">
                        <h2>Statistics</h2>
                        <JsLifeBar pokemon={pokemon}/>
                        <div className="twoColumns">
                            <div className="leftStats">
                                <p className="itemStats">Speed : {pokemon.baseStats.speed.base}</p>
                                <p className="itemStats">Special defense : {pokemon.baseStats.specialDefense.base}</p>
                                <p className="itemStats">Special attack : {pokemon.baseStats.specialAttack.base}</p>
                            </div>
                            <div className="rightStats">
                                <p className="itemStats">Defense : {pokemon.baseStats.defense.base}</p>
                                <p className="itemStats">Attack : {pokemon.baseStats.attack.base}</p>
                                <p className="itemStats">HP : {pokemon.baseStats.hp.base}</p>
                            </div>
                        </div>
                    </div>
                    <div className="movesStats">
                        <h4>MOVES LEARNED</h4>
                        {pokemon.spells.map(spell => <p className="itemSpell">{spell.name} : {spell.type}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DisplayPokemonTeamStats;