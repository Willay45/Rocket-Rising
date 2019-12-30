import React, {useEffect, useState} from 'react';

const JsLifeBar = ({pokemon}) => {
    const [pokemonLife, setPokemonLife] = useState(pokemon.base_Stats.hp.current);
    useEffect(() => {
        console.log("life has changed")
    }, [pokemonLife]);

    //Life converter to %
    const lifeToCent = () => {
        let toCent = pokemon.base_Stats.hp.current * 100 / pokemon.base_Stats.hp.base;
        return (toCent);
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
            <p>{pokemon.base_Stats.hp.current}/{pokemon.base_Stats.hp.base}</p>
        </div>
    )
};

export default JsLifeBar;