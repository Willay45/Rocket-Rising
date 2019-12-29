import {getRamdom} from "../utils/random";


export default {
    getAction(batteGameScene) {
        // TODO: improve IA
        return {
            actionType: 'attack',
            payload: batteGameScene.getOpponentActivePokemon().getSpells()[getRamdom( batteGameScene.getOpponentActivePokemon().getSpells().length +1)],
        };
    }
};
