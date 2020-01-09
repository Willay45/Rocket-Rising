import {getRamdom} from "../utils/random";


export default {
    getAction(batteGameScene) {
        const pokemonSpells = batteGameScene.getOpponentActivePokemon().getSpells();
        const iSpell = getRamdom( pokemonSpells.length);
        
        return {
            actionType: 'attack',
            payload: pokemonSpells[iSpell].getName(),
        };
    }
};
