import React, {useState} from 'react';
import './AbandonedBuildingMap.css';
import axios from 'axios';
import NavBar from "./NavBar";
import randomNumber from "../services/RandomNumber";

const AbandonedBuildingMap = () => {

    const [opponentObject, setOpponentObject] = useState(null);

    const getThePokemon = async () => {
        // Getting the type of pokemon
        const stockTypes = [];
        //Get ghost type
        let type1 = await axios.get("https://pokeapi.co/api/v2/type/8/");
        //Get psychic type
        let type2 = await axios.get("https://pokeapi.co/api/v2/type/14/");
        //Get dark type
        let type3 = await axios.get("https://pokeapi.co/api/v2/type/17/");

        Promise.all([...type1.data.pokemon.slice(0, 3), ...type2.data.pokemon.slice(0, 23), ...type3.data.pokemon.slice(0, 5)]).then((values) => {
            let content = values;
            stockTypes.push(...content);
            let randomPokemon = stockTypes[randomNumber(31, 0)];
            axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon.pokemon.name}`)
                .then(response => response.data)
                .then(data => {
                    setOpponentObject(data);
                })
        });
    };

    return (
        <div>
            <div className="darkBorder">
                <h1 className="mapTitle">Abandoned castle</h1>
            </div>
            <div className="mapRenderAbandoned">
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

export default AbandonedBuildingMap;