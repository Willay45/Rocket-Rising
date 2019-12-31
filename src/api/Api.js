import axios from "axios";


const pokemonApi = "https://pokeapi.co/api/v2";
const axiosConfig = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
};

export default {

    getPokemon(id) {
        return axios.get(`${pokemonApi}/pokemon/${id}/`)
            .then(function (response) {
                return response.data;
            });
    },
    getSpell(id) {
        return axios.get(`${pokemonApi}/move/${id}/`, axiosConfig)
            .then(function (response) {
                return response.data;
            });
    }

}