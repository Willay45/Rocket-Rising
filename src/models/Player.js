import {getRandomInterval} from "../utils/random";

export default class Player {
    constructor(name, pokemonTeam, helloMessage, winMessage, loseMessage, picture) {
        this.name = name ? name : "";
        this.pokemonTeam = pokemonTeam || [];
        this.inventory = [];
        this.wallet = 0;
        this.winMessage = winMessage;
        this.loseMessage = loseMessage;
        this.helloMessage = helloMessage;
        this.picture = picture;
    }

    getPokemonTeam() {
        return this.pokemonTeam;
    }

    getPicture() {
        return this.picture;
    }

    getInventory() {
        return this.inventory;
    }

    setInventory(item) {
        this.inventory.push(item);
        let stockInventory = this.getInventory();
        localStorage.setItem('playerInventory', JSON.stringify(stockInventory));
    }

    getName (){
        return this.name;
    }

    getWallet() {
        return this.wallet;
    }


    addPokemonToTeam(pokemon){
        this.pokemonTeam.push(pokemon);
    }

    setLocalStorageTeam() {
        let stockTeam = this.getPokemonTeam();
        localStorage.setItem('pokemonTeam', JSON.stringify(stockTeam));
    }

    getLocalTeam() {
        let localTeam = JSON.parse(localStorage.getItem('pokemonTeam'));
        return localTeam;
    }

    hasAlivePokemon(){
       return this.pokemonTeam.filter(pokemon=>pokemon.isAlive()).length > 0;
    }

    getWinMessage() {
        return this.winMessage;
    }

    getLoseMessage(){
        return this.loseMessage;
    }

    getHelloMessage() {
        return this.helloMessage;
    }

    usePokeball(getOpponentActivePokemon) {
        if(getOpponentActivePokemon.getCurentHp() > (getOpponentActivePokemon.getBaseStats().hp .base/2)){
            let randomNumber = getRandomInterval(1, 11);
            if(randomNumber === 1){
                getOpponentActivePokemon.setIsCaptured(true);
                this.addPokemonToTeam(getOpponentActivePokemon.getName());
            }
        }else if (getOpponentActivePokemon.getCurentHp() > getOpponentActivePokemon.getBaseStats().hp .base/4 && getOpponentActivePokemon.getCurentHp() < getOpponentActivePokemon.getBaseStats().hp .base/2){
            let randomNumber = getRandomInterval(1, 3);
            if (randomNumber === 1){
                getOpponentActivePokemon.setIsCaptured(true);
                this.addPokemonToTeam(getOpponentActivePokemon.getName());
            }
        }else if (getOpponentActivePokemon.getCurentHp() < getOpponentActivePokemon.getBaseStats().hp .base/4){
            let randomNumber = getRandomInterval(1, 2);
            if(randomNumber === 0){
                getOpponentActivePokemon.setIsCaptured(true);
                this.addPokemonToTeam(getOpponentActivePokemon.getName());
            }
        }
    }
}