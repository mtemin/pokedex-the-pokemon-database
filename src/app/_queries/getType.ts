import axios from "axios";

export async function getType(type: string) {
    if (type)
        return axios({
            url: `https://pokeapi.co/api/v2/type/${type}`,
            method: 'get',
            headers: {"content-type": "application/json"},
            // data: {"query": getTypeQuery}
        })
};
