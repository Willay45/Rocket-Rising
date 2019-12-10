import React, {useState} from 'react';
import './ForestMap.css';
import axios from 'axios';
import NavBar from "./NavBar";

const ForestMap = () => {

    const [opponentObject, setOpponentObject] = useState(null);

    //Get a random number to search a random pokemon
    function getRandomNumber() {
        const random = (max, min) => {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        return random(0, 61)
    }

    const getThePokemon = async () => {
        // Getting the type of pokemon
        const stockTypes = [];
        let type1 = await axios.get("https://pokeapi.co/api/v2/type/17/");
        let type2 = await axios.get("https://pokeapi.co/api/v2/type/7/");
        let type3 = await axios.get("https://pokeapi.co/api/v2/type/4/");

        Promise.all([...type1.data.pokemon.slice(0, 12), ...type2.data.pokemon.slice(0, 12), ...type3.data.pokemon.slice(0, 37)]).then((values) => {
            let content = values;
            stockTypes.push(...content);
            let randomNumber = stockTypes[getRandomNumber()];
            //setOpponent(randomNumber.pokemon.name);
            axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber.pokemon.name}`)
                .then(response => response.data)
                .then(data => {
                    setOpponentObject(data);
                })
        });
    };

    return (
        <div>
            <div className="darkBorder">
                <h1 className="mapTitle">Forest</h1>
            </div>
            <div className="mapRenderForest">
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
                        <img onClick={getThePokemon} className="launchFightButton"
                             src="https://image.noelshack.com/fichiers/2019/49/5/1575625404-pokeball.png"
                             alt="launchFight"
                        />
                }
            </div>
            <NavBar/>
            <div className="darkBorder"></div>
        </div>
    )
};

export default ForestMap;