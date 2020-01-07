import React, {useState} from 'react';


const ChooseStaterPokemonDescription = ({pokemon, chooseAction}) => {

const [display, setDisplay] = useState("description");

    let component = '';
    if (display === "description") {
        component = (<div>
            <span className="description"> <h1 style={{fontSize: "1.2em"}}>{pokemon.getName()}</h1> {pokemon.getDescription() ? pokemon.getDescription() : ""}</span>
            <button className="choose" onClick={chooseAction}>Choose</button>
            <button className="stats" onClick={() => {
                setDisplay("stats");
            }}>Stats</button>
        </div>)
    }else if(display === "stats"){
        component = ( <div>
            <p>Speed : {pokemon.baseStats.speed.base}</p>
            <p>Special-defense : {pokemon.baseStats.specialDefense.current} / {pokemon.baseStats.specialDefense.base}</p>
            <p>Special-attack : {pokemon.baseStats.specialAttack.current} / {pokemon.baseStats.specialAttack.base}</p>
            <p>Defence : {pokemon.baseStats.defense.current} / {pokemon.baseStats.defense.base}</p>
            <p>Attack : {pokemon.baseStats.attack.current} / {pokemon.baseStats.attack.base}</p>
            <p>Health : {pokemon.baseStats.hp.current} / {pokemon.baseStats.hp.base}</p>
            <button className="choose" onClick={chooseAction}>Choose</button>
            <button className="description" onClick={() => {
                setDisplay("description");
            }}>Description</button>
        </div>)
    }

    return(
        <div>
            {component}
        </div>
    )
};


export default ChooseStaterPokemonDescription;