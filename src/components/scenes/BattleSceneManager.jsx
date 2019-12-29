import React, {useState, useEffect} from "react";
import "./BattleSceneManager.css";
import BattleSceneActionBox from "./BattleSceneActionBox";
import MusicService from "../../tech/MusicService";
import MessagesBoxAutoText from "../ui/MessagesBoxAutoText";
import GameSceneBattlefield from "./GameSceneBattlefield";

const BattleSceneManager = ({ game, endTrigger}) => {
    const scene = game.getCurrentScene();
    let messagesToDisplay = [];

    if(!scene.isStarted()){
        if (scene.isWildPokemon()) {
            messagesToDisplay = [`Ho..! A wild ${scene.getOpponentActivePokemon().getName()} appears!`,
                `you send ${scene.getPlayerActivePokemon().getName()}`];
        } else {
            messagesToDisplay = [`You assault ${scene.getOpponent().getName()}`,
                `${scene.getOpponent().getName()} : ${scene.getOpponent().getHelloMessage()}`,
                `you send ${scene.getPlayerActivePokemon().getName()}`];
        }
    }

    const [messages, setMessages] = useState(messagesToDisplay);
    const [discussionWithPnj, setDiscussionWithPnj] = useState(true);



    useEffect(() => {
        MusicService.play(scene.getMusic());

    });

    const playerActivePokemon = scene.getPlayerActivePokemon();
    const opponentActivePokemon = scene.getOpponentActivePokemon();


    const doTurn = (actionType, action) => {
        const arrayAction = scene.doTurn(actionType,action);
        const messages = arrayAction.reduce((m, e) => {
            m.push(`${e.isPlayer ? playerActivePokemon.getName() : opponentActivePokemon.getName()} uses ${e.action.getName()} on ${!e.isPlayer ? playerActivePokemon.getName() : opponentActivePokemon.getName()}.`);
            m.push(`${!e.isPlayer ? playerActivePokemon.getName() : opponentActivePokemon.getName()} lose ${e.damages} hp.`);

            if (e.hasKilled && e.isPlayer) {
                m.push(`${opponentActivePokemon.getName()} fainted.`);
            } else if (e.hasKilled && !e.isPlayer) {
                m.push(`${playerActivePokemon.getName()} fainted.`);
            }

            if (e.xpGain > 0) {
                m.push(`${playerActivePokemon.getName()} earned ${e.xpGain} exp.`);
            }

            return m;
        }, []);



    if(scene.isOver()){
        MusicService.play(scene.getMusic());

        if(game.getPlayer().hasAlivePokemon()){
            messages.push(`${scene.getOpponent().getName()} : ${scene.getOpponent().getLoseMessage()}`)
        }else {
            messages.push("You have no healthy pokemon left. You lose");
            messages.push(`${scene.getOpponent().getName()} : ${scene.getOpponent().getWinMessage()}`)
        }
    }


    setMessages(messages);
    };

    const endMessagesAction = () => {
        setMessages([]);
        setDiscussionWithPnj(false);
    };

    let boxComponent = (<BattleSceneActionBox game={game} doTurn={doTurn}/>);
    if(messages.length){
        boxComponent = (<MessagesBoxAutoText messages={messages} endMessagesAction={endMessagesAction}/>)
    }
    return(
        <div className="BattleSceneManager">

            <GameSceneBattlefield
                opponentActivePokemon={opponentActivePokemon}
                playerActivePokemon={playerActivePokemon}
                scene={scene}
                discussion={discussionWithPnj}/>

            <div className="actionBox">
                {boxComponent}
            </div>

        </div>
    )
};

export default BattleSceneManager;