import axios from "axios";


const pokemonApi = "https://pokeapi.co/api/v2";

export default {

    getPokemon(id) {
        return axios.get(`${pokemonApi}/pokemon/${id}`)
            .then(function (response) {
                return response.data;
            });
    },
    getSpell(id) {
        return axios.get(`${pokemonApi}/move/${id}`)
            .then(function (response) {
                return response.data;
            });
    }

}