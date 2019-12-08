import React, {useState} from 'react';
import './OceanMap.css';
import axios from 'axios';

const OceanMap = () => {

    const [opponent, setOpponent] = useState(null);

    //Get a random number to search a random pokemon
    function getRandomNumber() {
        const random = (max, min) => {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        return random(0, 10)
    }

    const getWaterPokemon = async () => {
        // Getting the type of pokemon
        let res = await axios.get("https://pokeapi.co/api/v2/type/11/");
        let data = res.data;
        await setOpponent(res.data.pokemon[getRandomNumber()].pokemon.name);
        let pokemonClone = res.data.pokemon[getRandomNumber()].pokemon.name;

        //Getting the pokemon object by the name
        let stats = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonClone}`);
        let content = stats.data;
        await setOpponent(stats.data);
    };


    const finalPokemon = () => {
        console.log(`The fetched pokemon is: ${opponent.name}`);
        console.log(opponent);
    };

    return (
        <div>
            <div className="darkBorder">
                <h1 className="mapTitle">Ocean</h1>
            </div>
            <div className="mapRender">
                <img onClick={getWaterPokemon} className="launchFight"
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
                <button onClick={finalPokemon}>Show final opponent in the console</button>
            </div>
        </div>
    )
};

export default OceanMap;