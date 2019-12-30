import Api from "../api/Api";
import Pokemon from "../models/Pokemon";
import AttackFactory from "./AttackFactory";
import shuffle from "../utils/shuffle";
import config from "../config";
import PokemonFactoryDescriptionsData from "./PokemonFactoryDescriptionsData";

class PokemonFactory{
    getStarters() {
        return  Promise.all(config.starterPokemonIDs.map(element => this.get(element, config.starterPokemonLvl)));
    }

    async get(id,lvl){
        const pokemonJson = await Api.getPokemon(id);
        const pokemonSpells = await Promise.all(pokemonJson.moves
            .filter(element => element.version_group_details.find(elements => elements.level_learned_at <= lvl &&
                elements.version_group.name === config.version))
            .map(element => element.move.name)
            .map(element => AttackFactory.get(element)));
        const finalPokemonSpells = shuffle(pokemonSpells.filter(element => element.power > 0)).slice(0, 4);

        const pokemon = new Pokemon(
            pokemonJson.id,
            pokemonJson.name,
            pokemonJson.base_experience,
            pokemonJson.types.map(element => element.type.name),
            {
                speed : {
                    base : pokemonJson.stats.find(element => element.stat.name === "speed").base_stat,
                    current : pokemonJson.stats.find(element => element.stat.name === "speed").base_stat,
                },
                specialDefense : {
                    base : pokemonJson.stats.find(element => element.stat.name === "special-defense").base_stat,
                    current : pokemonJson.stats.find(element => element.stat.name === "special-defense").base_stat,
                },
                specialAttack : {
                    base : pokemonJson.stats.find(element => element.stat.name === "special-attack").base_stat,
                    current : pokemonJson.stats.find(element => element.stat.name === "special-attack").base_stat,
                },
                defense : {
                    base : pokemonJson.stats.find(element => element.stat.name === "defense").base_stat,
                    current : pokemonJson.stats.find(element => element.stat.name === "defense").base_stat,
                },
                attack : {
                    base : pokemonJson.stats.find(element => element.stat.name === "attack").base_stat,
                    current : pokemonJson.stats.find(element => element.stat.name === "attack").base_stat,
                },
                hp : {
                    base : pokemonJson.stats.find(element => element.stat.name === "hp").base_stat,
                    current : pokemonJson.stats.find(element => element.stat.name === "hp").base_stat,
                }
            },
            finalPokemonSpells,
            PokemonFactoryDescriptionsData[id] || 'No-description'
        );
        pokemon.setLevel(lvl);

        return pokemon
    };
}

export default new PokemonFactory();


