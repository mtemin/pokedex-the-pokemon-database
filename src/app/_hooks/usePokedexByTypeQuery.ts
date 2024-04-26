import {useQuery} from "@tanstack/react-query";
import {getPokedexByType} from "../_queries/getPokedexByType";

export function usePokedexByTypeQuery(type: string) {
    const queryKey = ['pokedexByType'];

    const queryFn = async () => {
        return getPokedexByType(type).then(
            (result: any) => result.data.data.gen3_species
        );
    };

    return useQuery({queryKey, queryFn});
}

export default usePokedexByTypeQuery;