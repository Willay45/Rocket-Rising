import React, { useState } from 'react';
import './HealthBar.css';
import ProgressBar from './ProgressBar';


export default function HealthPlayer() {

	const {healthPoints, setHealthPoints} = useState({});
	
        function playerOne() {
            return (
                <div className="player-one">
                    <div className="txt-lokh">Pkmn Enemy : {healthPoints}</div>
                    <ProgressBar healthPoints={healthPoints} />
                </div>
            );      
        };   
        function Enemy() {
            return (
                <div className="player-two">
                    <div className="txt-drac">Pkmn Player : {healthPoints}</div>
                    <ProgressBar healthPoints={healthPoints} />
                </div>
            );
		};	  

        function heal() {
            var pokemonHp;
            var result = 80;
            pokemonHp.healthPoints={healthPoints};
            return (
            result.healthPoints
            );
        }

	return(<div>{playerOne()}{Enemy()}</div>)
}  

