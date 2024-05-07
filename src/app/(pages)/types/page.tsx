"use client"
import React from 'react';
import Image from "next/image";
import Navbar from "@/app/_components/Navbar";
import IconSearch from "@/app/_components/Icon-Search";
import useTypeQuery from "@/app/_hooks/useTypeQuery";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setType} from "@/lib/features/selectedTypeSlice";
import Link from "next/link";
import Skeleton from "@/app/_components/Skeleton";
import PokemonTypes from "@/app/_components/PokemonTypes";
import PokemonSearch from "@/app/_components/PokemonSearch";
import pokemonSearch from "@/app/_components/PokemonSearch";


function Page() {
    const dispatch = useAppDispatch()
    let selectedType = useAppSelector((state: any) => state.selectedType.value)
    const {
        data: pokedexByTypeData,
        isLoading: isPokedexByTypeLoading,
        isError: isPokedexByTypeError
    } = useTypeQuery(selectedType);

    if (pokedexByTypeData) {
        console.log(pokedexByTypeData.pokemon)
    }

    function getPokemonIdFromURL(url: string) {
        let result = url.split("/");
        return result[result.length - 2];
    }

    if (pokedexByTypeData) {
        let filtered = pokedexByTypeData.filter((pokemon: any) => {
            if (!pokemonSearch) {
                return pokedexByTypeData;
            } else {
                if ((pokemon.pokemon.name).toLowerCase().includes(pokemonSearch)) {
                    return pokemon
                }
            }
        });
        console.log(filtered)

    }
    return (
        <main className="container mx-auto max-[640px]:p-4">

            <Navbar/>
            <PokemonSearch/>

            <p className="mr-auto font-medium text-lg my-2">
                Filter By Types
            </p>
            <PokemonTypes/>
            <section id="pokedex-by-type">
                {isPokedexByTypeLoading &&
                    <>
                        {Array.from({length: 25}, (_, i) => (
                            <Skeleton key={i} className="h-10 w-full my-2 rounded-none"/>
                        ))
                        }
                    </>
                }
                {pokedexByTypeData &&
                    pokedexByTypeData.pokemon.map((pokemon: any) =>
                        <Link key={pokemon.id} href={`/pokemon/${getPokemonIdFromURL(pokemon.pokemon.url)}`}>
                            <article style={{backgroundColor: `var(--type-${selectedType})`}}
                                     className="flex flex-col justify-center items-center my-2 p-2 bg-[var(--pokemon-bg)] hover:shadow-inside transition-all duration-300">

                                <p className="capitalize text-[var(--background)] font-medium">{pokemon.pokemon.name}</p>
                            </article>
                        </Link>
                    )
                }
            </section>
        </main>


    );
}

export default Page;