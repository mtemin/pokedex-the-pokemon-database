import React from 'react';
import Skeleton from "@/app/_components/Skeleton";
import Link from "next/link";
import useTypeQuery from "@/app/_hooks/useTypeQuery";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";

function PokedexByTypeList() {

    const dispatch = useAppDispatch()
    let selectedType = useAppSelector((state: any) => state.selectedType.value)

    const {
        data: pokedexByTypeData,
        isLoading: isPokedexByTypeLoading,
        isError: isPokedexByTypeError
    } = useTypeQuery(selectedType);

    function getPokemonIdFromURL(url: string) {
        let result = url.split("/");
        return result[result.length - 2];
    }

    console.log(pokedexByTypeData)

    return (
        <section id="pokedex-by-type">
            {pokedexByTypeData &&
                pokedexByTypeData.pokemon.map((pokemon: { pokemon: { name: string, url: string }, slot: number }) =>
                    <Link key={pokemon.pokemon.name} href={`/pokemon/${getPokemonIdFromURL(pokemon.pokemon.url)}`}>
                        <article style={{backgroundColor: `var(--type-${selectedType})`}}
                                 className="flex flex-col justify-center items-center my-2 p-2 bg-[var(--pokemon-bg)] hover:shadow-inside transition-all duration-300">

                            <p className="capitalize text-[var(--background)] font-medium">{pokemon.pokemon.name}</p>
                        </article>
                    </Link>
                )
            }
        </section>
    );
}

export default PokedexByTypeList;
