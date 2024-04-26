import {useQuery} from "@tanstack/react-query";
import {getType} from "../_queries/getType";

export function useTypeQuery(type: string) {
    const queryKey = [`type-${type}`];

    const queryFn = async () => {
        return getType(type).then(
            (result: any) => result.data
        );
    };

    return useQuery({queryKey, queryFn});
}

export default useTypeQuery;