import React, {useState, useEffect} from "react";
import MessagesBox from "../ui/MessagesBox";
import "./TutorialSceneManager.css"
import { useHistory } from "react-router-dom";
import MusicService from "../../tech/MusicService";
import { items } from "../../datas/items";

const TutorialSceneManager = () => {
    const history = useHistory();

    useEffect(() => {
        MusicService.play("tutorial");
    });

    const messages = [`Welcome to the Team Rocket, young rookie !
    Well you may know our plan, I repeat for you :`,
    `We want to control the world and all the pokemons by the way !
    For that, we made a new powerful pokeball : The ShadowBall !`,
    `It's allow you to capture any pokemons, even those belong to another trainer.
    Use it for steal the maximum of them. I'll give you 5 of them.`,
    `You passed the selections, but you still have to do your proofs !
    Your first mission will be to fight a young trainer: Ondine !`,
    `But watch out, she'll probably try to defend herself…`,
    `What, you don't have any pokemon ?
    Well… Choose one among this three of them :`
];




    const [skip, setSkip] = useState(messages[0]);
    const [stop, setStop] = useState(false);

    function skipped() {
        let shadowball = items[3];
        shadowball.number = 5;
        let playerInventory = [];
        playerInventory.push(shadowball);
        localStorage.setItem('playerInventory', JSON.stringify(playerInventory));
        const index = messages.indexOf(skip);
        setSkip(messages[index + 1]);
        if (index === messages.length - 1) {
            setStop(true)
        }
    };

    if (stop === true){
        history.push("/choose-starter");
    };

    return (
        <div>
            <div className="background-giovanni">
                <img className="giovanni" src="https://www.pokepedia.fr/images/7/72/Giovanni_SL.png" alt="giovanni"/>
            </div>

            <div>
                <MessagesBox>
                    {skip}
                    <button onClick={skipped}>Next</button>
                </MessagesBox>
            </div>
        </div>
    )
};

export default TutorialSceneManager;