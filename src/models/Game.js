import Player from "./Player";
import PokemonFactory from "../factories/PokemonFactory";
import config from "../config";
import SceneFactory from "../factories/SceneFactory";

class Game {
    constructor() {
        this.currentScene = undefined;
        this.previousScene = undefined;
        this.player = new Player("", []);
    }

    async getStarters() {
        this.starters = await PokemonFactory.getStarters();
        return this.starters
    }

    async startGameWithStarter(starterID) {
        if (config.starterPokemonIDs.indexOf(starterID) < 0) {
            throw new Error('Pokemon ID given is not configured to be a potential start');
        }

        const pokemon = await PokemonFactory.get(starterID,config.starterPokemonLvl);
        this.getPlayer().addPokemonToTeam(pokemon);
        this.getPlayer().setLocalStorageTeam();

        const ondineScene = await SceneFactory.get('ondine_battle');
        this.setCurrentScene(ondineScene);
    }

    getCurrentScene() {
        return this.currentScene;
    }

    getPreviousScene() {
        return this.previousScene;
    }

    setCurrentScene(scene) {
        this.currentScene = scene;
    }

    backToPreviousScene() {
        const currScene = this.currentScene;
        this.currentScene = this.previousScene;
        this.previousScene = currScene;
    }

    getPlayer() {
        return this.player;
    }
}

export default new Game();