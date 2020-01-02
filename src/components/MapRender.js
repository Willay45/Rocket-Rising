import React, {useState, useEffect} from "react";
import axios from "axios";
import NavBar from "./NavBar";
import randomNumber from "../services/RandomNumber";
import {maps} from "../services/maps";
import "./MapRender.css";
import MusicService from "../tech/MusicService";
import Game from "../models/Game";
import BattleGameScene from "../models/BattleGameScene";
import PokemonFactory from "../factories/PokemonFactory";
import { useHistory } from 'react-router-dom';

const MapRender = (props) => {
    const history = useHistory();
        const [selectedMap, setSelectedMap] = useState({});
        const [opponentObject, setOpponentObject] = useState(null);
        const [stockTypes, setStockTypes] = useState([]);

        const [game, setGame] = useState(Game);
        if(!game.getCurrentScene()) {
            history.push('/choose-starter');
        }

        const getPokemon = (myMap) => {
            const stock = [];
            myMap.types.forEach(element => {
                axios.get(`https://pokeapi.co/api/v2/type/${element.id}`, {responseType: 'json'})
                    .then(response => response.data.pokemon.slice(0, element.nbPokemon))
                    .then(data => {
                        stock.push(...data);
                        setStockTypes(stock)
                    })
            });
        };

        useEffect(() => {
            (async () => {
                let myMap = {};
                let theMap = props.match.params.map;
                maps.map(map => {
                    if (map.id === theMap) {
                        myMap = map;
                        setSelectedMap(myMap);
                    }
                });

                let nbByType = myMap.nbPokemon;
                await getPokemon(myMap);
            })()
        }, []);

        const getRandomPokemon = async () => {
            const randomPokemon = stockTypes[randomNumber(0, selectedMap.nbTotal)];
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon.pokemon.name}`);
            const pokemon = await response.data;
            setOpponentObject(pokemon);

            setTimeout(() => {
               MusicService.play('wildVsPlayer');
               PokemonFactory.get(pokemon.name.toLowerCase(), 15)
                   .then((opponent) => {
                       Game.setCurrentScene(new BattleGameScene(opponent ,'', (game) => game.backToPreviousScene()));
                       history.push('/game');
                   });
            }, 1500);
        };

        return (
            <div className="mapRenderContainer">
                <div className={`darkBorder`}>
                    {selectedMap ? <h1 className="mapTitle">{selectedMap.name}</h1> : null}
                </div>
                <div className={selectedMap ? `${selectedMap.className}` : "mapRender"}>
                    {opponentObject
                        ?
                        <div className="fetchedPokemon">
                            <h1 className="popUp">{`A wild ${opponentObject.name} appears !`}</h1>
                            <img className="pokemonSprite"
                                 src={`http://www.pokestadium.com/sprites/xy/${opponentObject.name}.gif`}
                                 alt="a wild pokemon appears"
                            />
                        </div>
                        :
                        <div>
                            <img onClick={getRandomPokemon} className="launchFightButton"
                                 src="https://image.noelshack.com/fichiers/2019/49/5/1575625404-pokeball.png"
                                 alt="launchFight"
                            />
                        </div>
                    }
                </div>
                <NavBar/>
            </div>
        )
    }
;
export default MapRender;
