import React, {useEffect, useState} from 'react';

const JsLifeBar = ({pokemon}) => {
    const [pokemonLife, setPokemonLife] = useState(pokemon.baseStats.hp.current);

    //Life converter to %
    const lifeToCent = () => {
        let toCent = pokemon.baseStats.hp.current * 100 / pokemon.baseStats.hp.base;
        return toCent;
    };

    return (
        <div>
            <div style={{
                backgroundColor: 'grey',
                width: '100px',
                height: '4px'
            }}
            >
                <div style={{
                    backgroundColor: 'red',
                    width: `${lifeToCent()}px`,
                    height: '4px'
                }}
                />
            </div>
            <p>{pokemon.baseStats.hp.current}/{pokemon.baseStats.hp.base}</p>
        </div>
    )
};

export default JsLifeBar;