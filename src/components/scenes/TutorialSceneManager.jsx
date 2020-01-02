import React, {useState, useEffect} from "react";
import MessagesBox from "../ui/MessagesBox";
import "./TutorialSceneManager.css"
import { useHistory } from "react-router-dom";
import MusicService from "../../tech/MusicService";

const TutorialSceneManager = () => {
    const history = useHistory();

    useEffect(() => {
        MusicService.play("tutorial");
    });

const messages = [`Welcome to the Team Rocket, young rookie !`,
    `Well you may know our plan, I repeat for you :`,
    `We want to control the world and all the pokemons by the way !`,
    `And for that, we made a new powerful pokeball : The ShadowBall !`,
    `It's allow you to capture pokemons, whatever they are wild or belong to another trainer.`,
    `Use it for steal a maximum of citizen's pokemons.`,
    `You past with succes the selections, but you still have to do your proofs !`,
    `Your first mission will be to bring back a Poliwag.`,
    `It looks like than a girl on the beach has already that pokemon. You know what to do…`,
    `However, it's possible than she try to defend herself…`,
    ` What, you don't have any pokemon ?`,
    `Well… Choose one among this three of them :`,
    `(Starter choice screen)`,
    `Good. Come back with the Stary when it's done.`,
    `Good luck, and don't get caught by Looker or another policeman.`,
    `(Click here to open the map and go to the beach)`,
    `Well done, you have fulfill your mission has expected.`,
    `Now, go outside, and be sure than the Team Rocket is feared by everyone !`,
    `If you need something, come back here to buy some objects for your stuff.`

];



    const [skip, setSkip] = useState(messages[0]);
    const [stop, setStop] = useState(false);

    function skipped() {
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