import React, {useState} from 'react';
import './VolcanoMap.css';
import axios from 'axios';
import NavBar from "./NavBar";

const VolcanoMap = () => {

    const [opponentObject, setOpponentObject] = useState(null);

    //Get a random number to search a random pokemon
    function getRandomNumber() {
        const random = (max, min) => {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        return random(0, 24)
    }

    const getWaterPokemon = async () => {
        // Getting the type of pokemon
        const stockTypes = [];
        //Dragon request
        let type1 = await axios.get("https://pokeapi.co/api/v2/type/16/");
        //Fire request
        let type2 = await axios.get("https://pokeapi.co/api/v2/type/10/");

        Promise.all([...type1.data.pokemon.slice(0, 3), ...type2.data.pokemon.slice(0, 21)]).then((values) => {
            let content = values;
            stockTypes.push(...content);
            let randomNumber = stockTypes[getRandomNumber()];
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
                <h1 className="mapTitle">Volcano</h1>
            </div>
            <div className="mapRenderVolcano">
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
            <NavBar/>
            <div className="darkBorder"></div>
        </div>
    )
};

export default VolcanoMap;