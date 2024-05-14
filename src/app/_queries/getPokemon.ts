import axios from "axios";

export async function getPokemon(pokemonId: number) {
    return axios({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
        method: 'get',
        headers: {"content-type": "application/json"},
        // data: {"query": getPokemonQuery}
    })

}
