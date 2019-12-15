import React, {useState, useEffect} from 'react';
import './DisplayPokemonTeamStats.js.css'

const DisplayPokemonTeamStats = ({pokemon, teamPokemon, index}) => {

    const [favorite, setFavorite] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        localStorage.setItem('fetched pokemon', JSON.stringify(teamPokemon))
    }, [teamPokemon]);

    const addToFavorite = (index) => {
        console.log(teamPokemon);
        let stock = teamPokemon.splice(index, 1, teamPokemon[index]);
        let stockFavorite = teamPokemon[index];
        setFavorite(stockFavorite);
        console.log(favorite);
        teamPokemon.splice(index, 1);
        teamPokemon.splice(0, 0, stockFavorite);
        console.log(teamPokemon);
        localStorage.setItem('fetched pokemon', JSON.stringify(teamPokemon));
        setIsFavorite(true);
    };

    const removeFavorite = () => {
        setIsFavorite(false);
    };

    return (
        <div className="statsContainer">
            <div className="header">
                { isFavorite ? <div
                        onClick={removeFavorite}
                        className="favoritePokemon"
                    >Remove current favorite</div>
                    : <div className="favoritePokemon"
                    onClick={() => {
                    addToFavorite(index);
                }}
                >Add as favorite</div>}
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