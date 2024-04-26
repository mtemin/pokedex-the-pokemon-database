import axios from "axios";

export async function getPokedex(limit: number, offset: number) {
    const getPokedexQuery = `query getPokedex{
  pokemons(limit:${limit},offset:${offset}) {
    count
    next
    previous
    nextOffset
    prevOffset
    status
    message
    results {
      id
      name
      image
    }
  }
}
`
    return axios({
        url: 'https://graphql-pokeapi.graphcdn.app/',
        method: 'post',
        headers: {"content-type": "application/json"},
        data: {"query": getPokedexQuery}
    })

}

