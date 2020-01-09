import React, {useState, useEffect} from "react";
import Game from "../../models/Game";
import BattleGameScene from "../../models/BattleGameScene";
import BattleSceneManager from "./BattleSceneManager";
import ChooseStarterScene from "./ChooseStarterScene";
import SceneFactory from "../../factories/SceneFactory";
import './GameEngine.css';
import { useHistory } from 'react-router-dom';
import WorldMapGameScene from "../../models/WorldMapGameScene";
import NavMaps from "../NavMaps";
import TestMaps from "../TestMaps";

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
    }else if (currentScene instanceof WorldMapGameScene){
        sceneToRender = (<TestMaps/>)
    }

    return(
        <div className="GameEngine">
            {sceneToRender}
        </div>
    )
};


export default GameEngine;