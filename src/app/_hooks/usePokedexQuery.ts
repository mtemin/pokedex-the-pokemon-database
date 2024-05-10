import {useQuery} from "@tanstack/react-query";
import {getPokedex} from "../_queries/getPokedex";

export function usePokedexQuery(limit: number, offset: number) {
    const queryKey = ['pokedex'];

    const queryFn = async () => {
        return getPokedex(limit, offset).then(
            (result: any) => result.data.data.pokemons.results
        );
    };

    return useQuery({queryKey, queryFn, enabled: false});
}

export default usePokedexQuery;