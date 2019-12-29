import Player from "./Player";
import Game from "./Game";
import IA from "../ia/IA";



export default class BattleGameScene {
    constructor(opponent, background, endAction) {
        this.music = (opponent instanceof Player ? 'trainerVsPlayer' : 'wildVsPlayer');
        this.opponent = opponent;
        this.player  = Game.getPlayer();
        this.background = background;
        this.endAction = endAction;
        this.game = Game;
        this.started = false;

        this.playerActivePokemon = this.player.getPokemonTeam()[0];
        this.opponentActivePokemon = opponent instanceof Player ? opponent.getPokemonTeam()[0] : opponent ;
    }


    getOpponent() {
        return this.opponent;
    }

    getBackground() {
        return this.background;
    }

    getMusic() {
        return this.music;
    }

    getEndAction(){
        return this.endAction;
    }

    getPlayerActivePokemon(){
        return this.playerActivePokemon;
    }

    getOpponentActivePokemon(){
        return this.opponentActivePokemon;
    }

    isWildPokemon(){
        return !(this.opponent instanceof Player);
    }

    isStarted(){
        return this.started;
    }

    isOver() {
        const playerIsAlive = this.player.hasAlivePokemon();
        const opponentsIsAlive = this.opponent instanceof Player ? this.opponent.hasAlivePokemon(): this.opponent.isAlive();
        return !(playerIsAlive && opponentsIsAlive);
    }

    getOpponentImage() {
        return this.opponent instanceof Player ? this.opponent.getPicture(): this.opponent.getSpriteFrontUrl();
    }

    doTurn (playerActionType, playerActionPayload){
        this.started = true;
        const {actionType: opponentActionType, payload: opponentActionPayload} = IA.getAction(this);
        const result = [];

        switch (playerActionType) {
            case 'attack':
                const {damages} = this.playerActivePokemon.attackPokemon(this.opponentActivePokemon, playerActionPayload);

                result.push({
                    actionType: 'attack',
                    action: playerActionPayload,
                    isPlayer: true,
                    damages,
                    isDead: !this.getPlayerActivePokemon().isAlive(),
                    hasKilled: !this.getOpponentActivePokemon().isAlive(),
                    xpGain:(
                        !this.getOpponentActivePokemon().isAlive() && this.getPlayerActivePokemon().isAlive()
                    ) ? this.getPlayerActivePokemon().gainXp(this.getOpponentActivePokemon()) : 0,
                });
                break;
        }

        if (this.getOpponentActivePokemon().isAlive()) {
            switch (opponentActionType) {
                case 'attack':
                    const {damages} = this.opponentActivePokemon.attackPokemon(this.playerActivePokemon, opponentActionPayload);
                    result.push({
                        actionType: 'attack',
                        action: opponentActionPayload,
                        isPlayer: false,
                        damages,
                        isDead: !this.getOpponentActivePokemon().isAlive(),
                        hasKilled: !this.getPlayerActivePokemon().isAlive(),
                        xpGain:(
                            !this.getOpponentActivePokemon().isAlive() && this.getPlayerActivePokemon().isAlive()
                        ) ? this.getPlayerActivePokemon().gainXp(this.getOpponentActivePokemon()) : 0,
                    });
                    break;
            }
        }

        if(this.isOver() && this.player.hasAlivePokemon()){
            this.music = this.isWildPokemon() ? 'victoryVsPokemon' : 'victoryVsTrainer';
        }

        return result;
    }

};