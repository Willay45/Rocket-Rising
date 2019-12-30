import React, {useState} from "react";
import "./BattleSceneActionBox.css"

export default  ({game, doTurn}) => {
    const [status, setStatus] = useState( "actions");

    const playerActivePokemonSpells = game.getCurrentScene().getPlayerActivePokemon().getSpells();

    const switchStatus = (newStatus) => () => {
        setTimeout(() => setStatus(newStatus),150);

    };

    if(status === "actions"){
        return (
            <div className="BattleSceneActionBox">
                <div className="actionsDisplay">
                    <button className="buttonColum" onClick={switchStatus('fight')}>Fight</button>
                    <button className="buttonColum2">Bag</button>
                   <button className="buttonColum">Pokemon</button>
                   <button className="buttonColum2" disabled={!game.getCurrentScene().isWildPokemon()}>Run</button>
                </div>
            </div>
        )
    } else if (status === "fight"){
        return (
            <div className="BattleSceneActionBox">
                <div className="attackDisplay">
                    {playerActivePokemonSpells.map((spell, index )=> (
                        <button key={index} onClick={() => doTurn("attack",spell.getName())}>
                            {spell.getName()} <br/>
                            <span style={{fontSize: '0.7em'}}>power: {spell.getPower()}</span>
                        </button>
                        )
                    )}
                    <button className="back" onClick={switchStatus("actions")}>Back</button>
                </div>
            </div>
        )
    }

    return (<div>Unknown status {status}</div>)

};
