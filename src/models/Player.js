
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

    getName (){
        return this.name;
    };

    getWallet() {
        return this.wallet;
    }

    addPokemonToTeam(pokemon){
        this.pokemonTeam.push(pokemon);
    };

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
}