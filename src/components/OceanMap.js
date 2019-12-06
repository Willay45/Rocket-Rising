import React, {useState} from 'react';
import './OceanMap.css';
import axios from 'axios';

const OceanMap = () => {

    const [opponent, setOpponent] = useState(null);

    function randomPok() {
        return random(0, 10)
    }

    const random = (max, min) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const fetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/type/11/')
            .then(response => response.data)
            .then(data => {
                setOpponent(data.pokemon[randomPok()]);
            })
        // .then(() => {
        //     axios.get(`https://pokeapi.co/api/v2/pokemon/${opponent.pokemon.name}`)
        //         .then(response => response.data)
        //         .then(data => {
        //             setOpponent(data);
        //         })
        // })
    };

    const giveMeStats = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${opponent.pokemon.name}`)
            .then(response => response.data)
            .then(data => {
                setOpponent(data);
            })
    };

    //TODO: ASYNC AWAIT

    const fetchTheOpponent = () => {
        fetchPokemon();
        console.log(opponent.pokemon.name);
        giveMeStats();
        console.log(opponent);
        console.log(opponent);
    };

    const finalPokemon = () => {
        console.log(opponent);
    };

    return (
        <div>
            <div className="darkBorder">
                <h1 className="mapTitle">Ocean</h1>
            </div>
            <div className="mapRender">
                <img onClick={fetchPokemon} className="launchFight"
                     src="https://image.noelshack.com/fichiers/2019/49/5/1575625404-pokeball.png" alt="launchFight"/>
            </div>
            <div className="navButtons">
                <img src="https://image.noelshack.com/fichiers/2019/49/4/1575564164-backpack.png"
                     alt="inventory" /*onClick={() => {inventory}}*/ className="itemNav backpack"/>
                <img src="https://image.noelshack.com/fichiers/2019/49/4/1575565596-mappokemon.png"
                     className="map itemNav" alt="mini map"/>
                <img src="https://image.noelshack.com/fichiers/2019/49/5/1575621888-pokerocket.png" alt="pokemon team"
                     className="pokeTeam itemNav"/>
            </div>
            <div className="darkBorder">
                <button onClick={fetchTheOpponent}>Show me the object</button>
                <button onClick={finalPokemon}>Show me the final fetch</button>
            </div>
        </div>
    )
};

export default OceanMap;