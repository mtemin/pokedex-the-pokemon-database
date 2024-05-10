import axios from "axios";

export async function getPokedexByType(type: string) {
    const getPokedexByTypeQuery = `query samplePokeAPIquery {
  gen3_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_pokemons: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_ilike: "${type}"}}}}}, limit: 20, offset: 0) {
    name
    id
    pokemon_v2_pokemons {
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
}
`
    return axios({
        url: 'https://beta.pokeapi.co/graphql/v1beta',
        method: 'post',
        headers: {"content-type": "application/json"},
        data: {"query": getPokedexByTypeQuery}
    })
}

