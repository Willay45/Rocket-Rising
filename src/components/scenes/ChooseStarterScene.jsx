import React, {useEffect, useState} from 'react';
import './ChooseStarterScene.css';
import MessagesBox from "../ui/MessagesBox";
import PokemonFactory from "../../factories/PokemonFactory";
import ChooseStaterPokemonDescription from "./ChooseStaterPokemonDescription";
import Game from "../../models/Game";
import { useHistory } from "react-router-dom";
import MusicService from "../../tech/MusicService";


const ChooseStarterScene= () => {
    const history = useHistory();

    useEffect(() => {
        MusicService.play("tutorial");
    });

    const [starters, setStarters ]= useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(undefined);

    if (!starters.length) {
        PokemonFactory.getStarters().then((data) => {
            setStarters(data);
        });
    }
     const chooseAction = async () => {
       await Game.startGameWithStarter(selectedPokemon.getName());
         history.push("/game");
    };

    return(
        <div className="TutorialSceneManager" >
           <div className='game-view'>
            <div className="starter-container">
                {
                    starters.map((pokemon, index) => (<img onClick={()=>{
                        setSelectedPokemon(pokemon);
                    }} key={index} src={ pokemon.getSpriteFrontUrl() } alt="starters"/>))
                }
            </div>
           </div>

            <MessagesBox>
               { selectedPokemon ? <ChooseStaterPokemonDescription pokemon={selectedPokemon} chooseAction={chooseAction}/> : "Choose a pokemon"}
            </MessagesBox>

        </div>
    )
};

export default ChooseStarterScene;