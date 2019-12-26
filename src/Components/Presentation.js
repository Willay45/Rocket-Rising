import React, { useState } from 'react';
import './Presentation.css'


export default function Presentation() {

    const texts = [`Welcome to the Team Rocket, young rookie !`,
      `Well you may know our plan, I repeat for you :`,
      `We want to control the world and all the pokemons by the way !`, 
      `And for that, we made a new powerful pokeball : 
       The ShadowBall !`,
      `It's allow you to capture pokemons, whatever they are wild or belong to another trainer.`,
      `Use it for steal a maximum of citizen's pokemons.`, 
      `You past with succes the selections, but you still have to do your proofs !`,
      `Your first mission will be to bring back a Poliwag.`,
      `It looks like than a girl on the beach has already that pokemon. You know what to do…`,
      `However, it's possible than she try to defend herself…`, 
      ` What, you don't have any pokemon ?`, 
      `……………
       ………………………………………………………`,
      `Well… Choose one among this three of them :`,
      `(Starter choice screen)`,
      `Good. Come back with the Poliwag when it's done.`,
      `Good luck, and don't get caught by Looker or another policeman.`,
      `(Click here to open the map and go to the beach)`,
      `Well done, you have fulfill your mission has expected.`,
      `Now, go outside, and be sure than the Team Rocket is feared by everyone !`,
      `If you need something, come back here to buy some objects for your stuff.`];
      

  const [skip, setSkip] = useState (texts[0]);
  const [stop, setStop] = useState (false);

  function skipped() {
    const index = texts.indexOf(skip)
    setSkip(texts[index + 1]);
    if (index === texts.length-1){
      setStop(true)
    }
  };  

  return (
      <div>
        <p className="borderone"></p>
        <p className="bordertwo"></p>
        <img className="giovanni" alt="chef" src="https://image.noelshack.com/fichiers/2019/52/4/1577369256-giovanni-2.jpg"/> 
        <p className="boss">Giovanni</p>                     
        <p className="textbox">{skip}
          {stop===false ?<button onClick={skipped} className="skip">Next<img className="icon" alt="rocket" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/R_de_color_Rojo.PNG/220px-R_de_color_Rojo.PNG" /></button> : null}
        </p>        
      </div>
  );
}