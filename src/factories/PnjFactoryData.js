import Player from "../models/Player";
import PokemonFactory from "./PokemonFactory";

export default async () => {
    const ondineStaryuLvl5 = await PokemonFactory.get("staryu", 5);
    return {
        ondine : new Player("Ondine", [ondineStaryuLvl5], 'What ?? What do you want from me ? Back up ! Back up !', 'You stink man. See ya\'!!', 'Ho no..! my poor Staryu..', 'https://cdn.discordapp.com/attachments/649926210905964545/660805919533432832/ondine.png'),
    };
}