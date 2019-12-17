import React, {useState, useEffect} from 'react';
import './DisplayPokemonTeamStats.js.css';
import JsLifeBar from './JsLifeBar';

const DisplayPokemonTeamStats = ({pokemon, teamPokemon, index, setTeamPokemon}) => {

    const [favorite, setFavorite] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);

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
    };

    return (
        <div className="statsContainer">
            <div className="header">
                {pokemon.isFavorite ? <div
                        onClick={removeFavorite}
                        className="favoritePokemon"
                    >
                        <p className="favoriteText">Remove to favorite</p>
                        <img
                            className="favoriteStar"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png" alt="star"
                        />
                    </div>
                    :
                    <div className="favoritePokemon"
                         onClick={() => {
                             addToFavorite(index);
                         }}
                    >
                        <p className="favoriteText">Add to favorite</p>
                        <img
                            className="favoriteStar"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png" alt="star"
                        />
                    </div>}
                <img className="pokemonStatsImage"
                     src={`http://www.pokestadium.com/sprites/xy/${pokemon.name}.gif`}
                     alt={pokemon.name}/>
                <div className="nameAndLvl">
                    <h1 className="statsName">{pokemon.name.toUpperCase()}</h1>
                    <p>Lv.{pokemon.lvl}</p>
                </div>
            </div>
            <div className="typesStats">
                {pokemon.types ? <p>{pokemon.types[0].type.name.toUpperCase()}</p> : null}
                {pokemon.types && pokemon.types[1] ? <p>{pokemon.types[1].type.name.toUpperCase()}</p> : null}
            </div>

            {/*Statistics of the selected pokemon*/}
            <div className="movesAndStats">
                <div className="statsRender">
                    <div className="statistics">
                        <h4>Statistics</h4>
                        <JsLifeBar pokemon={pokemon}/>
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