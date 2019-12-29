import React, {useState, useEffect} from "react";
import Game from "../../models/Game";
import BattleGameScene from "../../models/BattleGameScene";
import BattleSceneManager from "./BattleSceneManager";
import ChooseStarterScene from "./ChooseStarterScene";
import SceneFactory from "../../factories/SceneFactory";
import './GameEngine.css';
import { useHistory } from 'react-router-dom';

const GameEngine = () => {
    const history = useHistory();

    const [game, setGame] = useState(Game);
    if(!game.getCurrentScene()) {
        history.push('/choose-starter');
    }


    const [currentScene, setCurrentScene] = useState(game.getCurrentScene());

    const sceneEndTrigger = () => setCurrentScene(game.getCurrentScene());


    let sceneToRender = (<h1>GameEngine</h1>);
    if (currentScene instanceof  BattleGameScene) {
        sceneToRender = (<BattleSceneManager endTrigger={sceneEndTrigger} game={game}/>);
    }

    return(
        <div className="GameEngine">
            {sceneToRender}
        </div>
    )
};


export default GameEngine;