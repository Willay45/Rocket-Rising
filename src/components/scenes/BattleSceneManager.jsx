import React, {useState, useEffect} from "react";
import "./BattleSceneManager.css";
import BattleSceneActionBox from "./BattleSceneActionBox";
import MusicService from "../../tech/MusicService";
import MessagesBoxAutoText from "../ui/MessagesBoxAutoText";
import GameSceneBattlefield from "./GameSceneBattlefield";
import Game from "../../models/Game";

const BattleSceneManager = ({ game, endTrigger}) => {
    const scene = game.getCurrentScene();
    const messagesToDisplay = [];
    const [messages, setMessages] = useState(messagesToDisplay);
    const [discussionWithPnj, setDiscussionWithPnj] = useState(true);

    const opponentName = scene.getOpponentActivePokemon().getName();

    console.log(Game.getPlayer());

    if(!scene.isStarted()){
        if (scene.isWildPokemon()) {
            messagesToDisplay.push(`Ho..! A wild ${opponentName} appears!`,
                `you send ${game.getCurrentScene().getPlayerActivePokemon().getName()}`);
        } else {
            messagesToDisplay.push(`You assault ${game.getCurrentScene().getOpponent().getName()}`,
                `${game.getCurrentScene().getOpponent().getName()} : ${game.getCurrentScene().getOpponent().getHelloMessage()}`,
                `you send ${game.getCurrentScene().getPlayerActivePokemon().getName()}`);
        }
    }



    useEffect(() => {
        MusicService.play(scene.getMusic());
    });
    const playerActivePokemon = scene.getPlayerActivePokemon();
    const opponentActivePokemon = scene.getOpponentActivePokemon();

    const doTurn = (actionType, action) => {
        const arrayAction = scene.doTurn(actionType,action);
        const messages = arrayAction.reduce((message, pokemon) => {

            message.push(`${pokemon.isPlayer ? playerActivePokemon.getName() : game.getCurrentScene().getOpponentActivePokemon().getName()} uses ${pokemon.action} on ${!pokemon.isPlayer ? playerActivePokemon.getName() : opponentActivePokemon.getName()}.`);
            message.push(`${!pokemon.isPlayer ? playerActivePokemon.getName() : game.getCurrentScene().getOpponentActivePokemon().getName()} lose ${pokemon.damages} hp.`);

            if (pokemon.hasKilled && pokemon.isPlayer) {
                message.push(`${opponentActivePokemon.getName()} fainted.`);
                localStorage.setItem('pokemonTeam', JSON.stringify(game.getPlayer().getPokemonTeam()));
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
            if (!scene.isWildPokemon()){
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
            }else {
                if(game.getPlayer().hasAlivePokemon()){
                        messages.push(`You won against ${scene.getOpponent().getName()}`);
                } else {
                    messages.push("You have no healthy pokemon left. You lose!!");
                    }
                }
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
