import axios from "axios";

export async function getPokemon(pokemonId: number) {
//     const getPokemonQuery = `query pokemon{
//   pokemon(name: "${pokemonName}") {
//     id
//     name
//     species{
//       url
//       name
//     }
//     location_area_encounters
//     abilities{
//       ability{
//         url
//         name
//       }
//     }
//     base_experience
//     forms{
//       url
//       name
//     }
//     stats{
//       base_stat
//       stat{
//         name
//       }
//     }
//     types{
//       slot
//       type{
//         name
//       }
//     }
//     sprites{
//       front_default
//       back_default
//     }
//     weight
//   }
// }
// `
    return axios({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
        method: 'get',
        headers: {"content-type": "application/json"},
        // data: {"query": getPokemonQuery}
    })

}

