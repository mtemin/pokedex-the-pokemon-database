import {useQuery} from "@tanstack/react-query";
import {getPokemon} from "../_queries/getPokemon";

export function usePokemonQuery(pokemonId: number) {
    const queryKey = [`pokemon-${pokemonId}`];

    const queryFn = async () => {
        return getPokemon(pokemonId).then(
            (result: any) => result.data
        );
    };

    return useQuery({queryKey, queryFn});
}

export default usePokemonQuery;
