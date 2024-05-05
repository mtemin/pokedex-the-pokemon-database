"use client"
import React from 'react';
import Image from "next/image";
import Navbar from "@/app/_components/Navbar";
import IconSearch from "@/app/_components/Icon-Search";
import useTypeQuery from "@/app/_hooks/useTypeQuery";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setType} from "@/lib/features/selectedTypeSlice";
import Link from "next/link";

function Page() {
    const dispatch = useAppDispatch()

    const pokemonTypes = [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ]
    // let selectedType = "fire";
    let selectedType = useAppSelector((state: any) => state.selectedType.value)
    const {
        data: pokedexByTypeData,
        isLoading: isPokedexByTypeLoading,
        isError: isPokedexByTypeError
    } = useTypeQuery(selectedType);
    if (isPokedexByTypeLoading) {
        console.log(`loading ${selectedType} pokemons`)
    }
    if (pokedexByTypeData) {

        console.log(pokedexByTypeData.pokemon)
    }

    function getPokemonIdFromURL(url: string) {
        let result = url.split("/");
        return result[result.length - 2];
    }

    getPokemonIdFromURL("https://pokeapi.co/api/v2/pokemon/7/")

    return (
        <main className="container mx-auto max-[640px]:p-4">

            <Navbar/>
            <div className="flex justify-start items-center">
                <input type="search" placeholder="Search for a pokemon..."
                       className="relative max-sm:w-full text-[var(--foreground)] mt-4 mr-[-2rem] bg-[var(--background)] border-0 border-b-2 border-[var(--foreground-card)]"/>
                <IconSearch className="w-8 h-8 absolute text-black bg-black z-[2]"/>
            </div>
            <p className="mr-auto font-medium text-lg my-2">
                Filter By Types
            </p>
            <section id="type-filters"
                     className="types grid grid-cols-9 max-[800px]:grid-cols-6 max-[640px]:grid-cols-3 gap-2 my-2">
                {pokemonTypes.map((type: string) =>
                    <div key={type}
                         onClick={() => {
                             dispatch(setType({type}));
                         }}
                         className="flex flex-col justify-center items-center rounded transition cursor-pointer border border-[var(--pokemon-bg-shadow)] duration-300 p-2 hover:border-[var(--pokemon-fg)]"
                    >
                        <Image
                            id={`${type}-type-icon`} key={type} src={`/Pokemon_Type_Icon_${type}.png`}
                            alt={`${type} Type Icon`}
                            width={35}
                            height={35} className="cursor-pointer z-[2] relative mb-auto"/>
                        <p id={`${type}-type-text`}
                           className="z-[1] relative mr-2 transition duration-300 text-center">
                            {type}
                        </p>
                    </div>
                )}
            </section>

            <section id="pokedex-by-type">
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