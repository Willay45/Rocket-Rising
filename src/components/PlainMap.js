import React, {useState} from 'react';
import './PlainMap.css';
import axios from 'axios';

const PlainMap = () => {

    const [opponent, setOpponent] = useState(null);
    const [opponentObject, setOpponentObject] = useState(null);

    //Get a random number to search a random pokemon
    function getRandomNumber() {
        const random = (max, min) => {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        return random(0, 61)
    }

    const getWaterPokemon = async () => {
        // Getting the type of pokemon
        const stockTypes = [];
        let type1 = await axios.get("https://pokeapi.co/api/v2/type/12/");
        let type2 = await axios.get("https://pokeapi.co/api/v2/type/3/");

        Promise.all([...type1.data.pokemon.slice(0, 23), ...type2.data.pokemon.slice(0, 37)]).then((values) => {
            let content = values;
            console.log(content);
            stockTypes.push(...content);
            console.log(stockTypes);
            let randomNumber = stockTypes[getRandomNumber()];
            console.log(randomNumber.pokemon.name);
            axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber.pokemon.name}`)
                .then(response => response.data)
                .then(data => {
                    console.log(data);
                    setOpponentObject(data);
                })
        });
    };

    return (
        <div>
            <div className="darkBorder">
                <h1 className="mapTitle">Plain</h1>
            </div>
            <div className="mapRenderPlain">
                {opponentObject ?
                    <h1 className="popUp">{`A wild ${opponentObject.name} appears !`}</h1>
                    : null
                }

                {opponentObject ?
                    <img className="pokemonSprite"
                         src={`http://www.pokestadium.com/sprites/xy/${opponentObject.name}.gif`}
                         alt="a wild pokemon appears"
                    /> :
                    null
                }

                {
                    opponentObject ?
                        null
                        :
                        <img onClick={getWaterPokemon} className="launchFightButton"
                             src="https://image.noelshack.com/fichiers/2019/49/5/1575625404-pokeball.png"
                             alt="launchFight"
                        />
                }
            </div>
            <div className="navButtons">
                <img src="https://image.noelshack.com/fichiers/2019/49/4/1575564164-backpack.png"
                     alt="inventory" /*onClick={() => {inventory}}*/ className="itemNav backpack"/>
                <img src="https://image.noelshack.com/fichiers/2019/49/4/1575565596-mappokemon.png"
                     className="map itemNav" alt="mini map"/>
                <img src="https://image.noelshack.com/fichiers/2019/49/5/1575621888-pokerocket.png"
                     alt="pokemon team"
                     className="pokeTeam itemNav"/>
            </div>
            <div className="darkBorder">

            </div>
        </div>
    )
};

export default PlainMap;