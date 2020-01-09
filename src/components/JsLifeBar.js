import React, {useEffect, useState} from 'react';

const JsLifeBar = ({pokemon}) => {
    const [pokemonLife, setPokemonLife] = useState(pokemon.curentHp);

    //Life converter to %
    const lifeToCent = () => {
        let toCent = pokemon.curentHp * 100 / pokemon.baseStats.hp.base;
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
            <p>{pokemon.curentHp}/{pokemon.baseStats.hp.base}</p>
        </div>
    )
};

export default JsLifeBar;