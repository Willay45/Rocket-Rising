import React, {useState, useEffect} from 'react';
import './UseItem.css';
import JsLifeBar from "./JsLifeBar";
import PokemonCard from "./PokemonCard";

const UseItem = (props) => {
    const [pokemonTeam, setPokemonTeam] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        let localTeam = JSON.parse(localStorage.getItem('pokemonTeam'));
        let stock = [];
        stock.push(localTeam);
        setPokemonTeam(stock);
        setSelectedItem(props.location.state.index.item);
    }, []);

    return (
        <div>
            {pokemonTeam ?
                pokemonTeam.map((pokemon) => {
                    return (
                        <div className="useItemContainer">
                            <div className="pokemonCardUseItem">
                                <div>
                                    <img src={`http://www.pokestadium.com/sprites/xy/${pokemon.name}.gif`} alt=""/>
                                </div>
                                <div className="nameAndLifeBar">
                                    <p>{pokemon.name}</p>
                                    <JsLifeBar pokemon={pokemon}/>
                                </div>
                            </div>
                            <div className="tipUseItem">
                                <p>Select the Pokémon to use your {selectedItem.name}</p>
                            </div>
                        </div>
                    )
                })
                : null}
        </div>
    )
};

export default UseItem;