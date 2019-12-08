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
        return random(0, 50)
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

    return (
        <div>
            <div className="darkBorder">
                <h1 className="mapTitle">Ocean</h1>
            </div>
            <div className="mapRender">
                {opponent ?
                        <h1 className="popUp">{`A wild ${opponent.name} appears !`}</h1>
                    : null
                }

                {opponent ?
                    <img className="pokemonSprite"
                        src={`http://www.pokestadium.com/sprites/xy/${opponent.name}.gif`}
                         alt="a wild pokemon appear"
                    /> :
                    null
                }

                {
                    opponent ?
                        null
                        :
                    <img onClick={getWaterPokemon} className="launchFightButton"
                         src="https://image.noelshack.com/fichiers/2019/49/5/1575625404-pokeball.png" alt="launchFight"
                    />
                }
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

            </div>
        </div>
    )
};

export default OceanMap;