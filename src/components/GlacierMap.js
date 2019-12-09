import React, {useState} from 'react';
import './GlacierMap.css';
import axios from 'axios';

const GlacierMap = () => {

    const [opponent, setOpponent] = useState(null);
    const [opponentObject, setOpponentObject] = useState(null);

    //Get a random number to search a random pokemon
    function getRandomNumber() {
        const random = (max, min) => {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        return random(0, 9)
    }

    const getWaterPokemon = async () => {
        // Getting the type of pokemon
        const stockTypes = [];
        let type1 = await axios.get("https://pokeapi.co/api/v2/type/15/");

        Promise.all([...type1.data.pokemon.slice(0, 23)]).then((values) => {
            let content = values;
            stockTypes.push(...content);
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
                <h1 className="mapTitle">Glacier</h1>
            </div>
            <div className="mapRenderGlacier">
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

export default GlacierMap;