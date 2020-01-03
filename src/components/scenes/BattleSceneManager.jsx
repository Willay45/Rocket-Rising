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
        const messages = arrayAction.reduce((message, pokemon) => {
            message.push(`${pokemon.isPlayer ? playerActivePokemon.getName() : opponentActivePokemon.getName()} uses ${pokemon.action} on ${!pokemon.isPlayer ? playerActivePokemon.getName() : opponentActivePokemon.getName()}.`);
            message.push(`${!pokemon.isPlayer ? playerActivePokemon.getName() : opponentActivePokemon.getName()} lose ${pokemon.damages} hp.`);

            if (pokemon.hasKilled && pokemon.isPlayer) {
                message.push(`${opponentActivePokemon.getName()} fainted.`);
            } else if (pokemon.hasKilled && !pokemon.isPlayer) {
                message.push(`${playerActivePokemon.getName()} fainted.`);
            }

            if (pokemon.xpGain > 0) {
                message.push(`${playerActivePokemon.getName()} earned ${pokemon.xpGain} exp.`);
            }

            return message;
        }, []);

        if(scene.isOver()){
            MusicService.play(scene.getMusic());

            if(game.getPlayer().hasAlivePokemon()){
                if (scene.getOpponent().getLoseMessage()) {
                    messages.push(`${scene.getOpponent().getName()} : ${scene.getOpponent().getLoseMessage()}`);
                }
            } else {
                messages.push("You have no healthy pokemon left. You lose");
                if (scene.getOpponent().getWinMessage()) {
                    messages.push(`${scene.getOpponent().getName()} : ${scene.getOpponent().getWinMessage()}`);

                }
            }
            setDiscussionWithPnj(true);
        }

        setMessages(messages);
    };

    const endMessageActionBackToBattle = () => {
        setMessages([]);
        setDiscussionWithPnj(false);
    };
    const endMessagesActionEndGame = () => {
        scene.getEndAction()(game);
        endTrigger()
    };
    const endMessagesAction = scene.isOver() ? endMessagesActionEndGame : endMessageActionBackToBattle;

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
