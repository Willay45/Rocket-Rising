import Api from "../api/Api";
import Pokemon from "../models/Pokemon";
import AttackFactory from "./AttackFactory";
import shuffle from "../utils/shuffle";
import config from "../config";
import PokemonFactoryDescriptionsData from "./PokemonFactoryDescriptionsData";

class PokemonFactory{
    getStarters() {
        return  Promise.all(config.starterPokemonIDs.map(e => this.get(e, config.starterPokemonLvl)));
    }

    async get(id,lvl){
        const pokemonJson = await Api.getPokemon(id);
        const pokemonSpells = await Promise.all(pokemonJson.moves
            .filter(e => e.version_group_details.find(ee => ee.level_learned_at <= lvl &&
                // ee.move_learn_method.name === "egg" &&
                ee.version_group.name === config.version))
            .map(e => e.move.name)
            .map(e => AttackFactory.get(e)));
        const finalPokemonSpells = shuffle(pokemonSpells.filter(e => e.power > 0)).slice(0, 4);

        const pokemon = new Pokemon(
            pokemonJson.id,
            pokemonJson.name,
            pokemonJson.base_experience,
            pokemonJson.types.map(e => e.type.name),
            {
                speed : {
                    base : pokemonJson.stats.find(e => e.stat.name === "speed").base_stat,
                    current : pokemonJson.stats.find(e => e.stat.name === "speed").base_stat,
                },
                specialDefense : {
                    base : pokemonJson.stats.find(e => e.stat.name === "special-defense").base_stat,
                    current : pokemonJson.stats.find(e => e.stat.name === "special-defense").base_stat,
                },
                specialAttack : {
                    base : pokemonJson.stats.find(e => e.stat.name === "special-attack").base_stat,
                    current : pokemonJson.stats.find(e => e.stat.name === "special-attack").base_stat,
                },
                defense : {
                    base : pokemonJson.stats.find(e => e.stat.name === "defense").base_stat,
                    current : pokemonJson.stats.find(e => e.stat.name === "defense").base_stat,
                },
                attack : {
                    base : pokemonJson.stats.find(e => e.stat.name === "attack").base_stat,
                    current : pokemonJson.stats.find(e => e.stat.name === "attack").base_stat,
                },
                hp : {
                    base : pokemonJson.stats.find(e => e.stat.name === "hp").base_stat,
                    current : pokemonJson.stats.find(e => e.stat.name === "hp").base_stat,
                }
            },
            finalPokemonSpells,
            PokemonFactoryDescriptionsData[id] || 'No-description'
        );
        pokemon.setLevel(lvl);

        console.log('PokemonFactory: created pokemon', pokemon.getName(), 'with spells', pokemon.getSpells());

        return pokemon
    };
}

export default new PokemonFactory();


