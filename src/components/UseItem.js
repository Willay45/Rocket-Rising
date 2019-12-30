import React, {useState, useEffect} from 'react';
import './UseItem.css';
import JsLifeBar from "./JsLifeBar";
import {Link} from "react-router-dom";

const UseItem = (props) => {
    const [pokemonTeam, setPokemonTeam] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [itemUsed, setItemUsed] = useState(false);
    const [playerInventory, setPlayerInventory] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        let localTeam = JSON.parse(localStorage.getItem('pokemonTeam'));
        setPokemonTeam(localTeam);
        let localInventory = JSON.parse(localStorage.getItem('playerInventory'));
        console.log(localInventory);
        setPlayerInventory(localInventory);
        setSelectedItem(props.location.state.index.item);
        console.log(props.location.state.index.item.power);
    }, []);

    const modifyPokemonTeam = (pokemon) => {
        let copyPoketeam = pokemonTeam;
        console.log(pokemon);
        console.log(pokemonTeam);
        console.log(copyPoketeam);
    };

    const injureAPokemon = () => {
        let damage = "10";
        let stockTeam = pokemonTeam;
        console.log(stockTeam[0].base_Stats.hp.current);
        stockTeam[0].base_Stats.hp.current = stockTeam[0].base_Stats.hp.current - damage;
        console.log(stockTeam[0].base_Stats.hp.current);
        console.log(stockTeam);
        localStorage.setItem('pokemonTeam', JSON.stringify(stockTeam))
    };

    return (
        <div className="useItemContainer">
            <div className="pageTitleUseItem">
                <h1>POKEMON TEAM</h1>
            </div>
            {pokemonTeam && itemUsed === false ?
                pokemonTeam.map((pokemon) => {
                    return (
                        <div>
                            <div className="pokemonCardUseItem"
                                 onClick={() => {
                                     let i = 0;
                                     let stockTeam = pokemonTeam;
                                     let localInventory = playerInventory;
                                     console.log(playerInventory);
                                     console.log(pokemon.base_Stats.hp);
                                     console.log(selectedItem);
                                     let currentLife = pokemon.base_Stats.hp.current;
                                     let baseLife = pokemon.base_Stats.hp.base;
                                     console.log(`${currentLife}/${baseLife}`);
                                     if (currentLife < baseLife) {
                                         while (currentLife < baseLife && i < selectedItem.power) {
                                             currentLife = currentLife + 1;
                                             i++;
                                         }
                                         console.log("The object has been used");
                                         stockTeam.map((element) => {
                                             if (element === pokemon) {
                                                 element.base_Stats.hp.current = currentLife;
                                                 setPokemonTeam(stockTeam);
                                                 console.log(element.base_Stats.hp);
                                             }
                                         });
                                         localInventory.map((element) => {
                                             console.log(element);
                                             console.log(selectedItem);
                                             if (element.name === selectedItem.name) {
                                                 console.log(element);
                                                 element.number = element.number - 1;
                                                 console.log(element);
                                                 console.log(localInventory);
                                                 setSelectedItem(element);
                                                 setPlayerInventory(localInventory)
                                             }
                                         });
                                         console.log(localInventory);
                                         setSelectedPokemon(pokemon);
                                         setItemUsed(true);
                                         localStorage.setItem('playerInventory', JSON.stringify(localInventory));
                                         localStorage.setItem('pokemonTeam', JSON.stringify(stockTeam));

                                     } else {
                                         alert(`Your item can't be used actually !`)
                                     }
                                 }}
                            >
                                <div>
                                    <img src={`http://www.pokestadium.com/sprites/xy/${pokemon.name}.gif`} alt=""/>
                                </div>
                                <div className="nameAndLifeBar">
                                    <p>{pokemon.name}</p>
                                    <JsLifeBar
                                        pokemon={pokemon}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
                :
            <div className="afterUseItem">
                {selectedItem && <h4>Your {selectedItem.name} has been used on {selectedPokemon.name}</h4>}
                <Link className="linkToInventoryItem" to="/inventory"><p>BACK TO INVENTORY</p></Link>
            </div>
            }


            <button onClick={injureAPokemon}>Hurt him</button>
            <Link to="/inventory"><button>Go back to inventory</button></Link>
            {itemUsed ?
                null
            : <div className="tipUseItem">
                    {selectedItem  ?
                        <p style={{textAlign:"center"}}>Click on a Pokémon to use {selectedItem.name}, it will heal {selectedItem.power} HP</p>
                        : null
                    }
                </div>
            }

        </div>
    )
};

export default UseItem;