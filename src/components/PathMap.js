import React, {useState} from 'react';
import './PathMap.css';
import axios from 'axios';
import NavBar from "./NavBar";

const PathMap = () => {

    const [opponent, setOpponent] = useState(null);

    //Get a random number to search a random pokemon
    function getRandomNumber() {
        const random = (max, min) => {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        return random(0, 36);
    }

    const getThePokemon = async () => {
        // Getting the type of pokemon
        let res = await axios.get("https://pokeapi.co/api/v2/type/1/");
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
                <h1 className="mapTitle">Path</h1>
            </div>
            <div className="mapRenderPath">
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

export default PathMap;