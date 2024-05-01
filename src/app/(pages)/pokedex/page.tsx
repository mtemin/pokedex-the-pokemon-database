"use client"
import React, {useEffect} from 'react';
import usePokedexQuery from "@/app/_hooks/usePokedexQuery";
import Navbar from "@/app/_components/Navbar";
import Skeleton from "@/app/_components/Skeleton";
import Link from "next/link";
import {useAppSelector, useAppDispatch} from '@/lib/hooks'
import {useInView} from 'react-intersection-observer';
import {loadMore} from "@/lib/features/pokedexLimitSlice";
import Image from "next/image";
import IconSpinner from "@/app/_components/Icon-Spinner";
import PokemonCard from "@/app/_components/PokemonCard";

function Pokedex() {
    const pokedexLimit = useAppSelector((state: any) => state.pokedexLimit.value)
    const {ref, inView, entry} = useInView();
    const dispatch = useAppDispatch()
    const VisibilitySensor = require('react-visibility-sensor');
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

    function onChange(isVisible: boolean) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    }

    function loadMorePokemons() {
        dispatch(loadMore())
        refetch().then(res => {
            return res
        });
    }

    useEffect(() => {
        // if (inView)
        loadMorePokemons()
        console.log("in view?")
        console.log(inView)
    }, [inView])

    const {
        data: pokedexData,
        isLoading: isPokedexLoading,
        isError: isPokedexError,
        refetch
    } = usePokedexQuery(pokedexLimit, 0);
    console.log(pokedexData)

    return (
        <main className="flex flex-col items-center bg-[var(--background)] px-8">
            <Image
                src="/Pokédex_logo.png"
                width={250}
                height={100}
                className="relative px-4 py-5 mb-3 mx-auto"
                alt="Pokedex Logo"
                priority
            />
            <div className="container mx-auto">
                <Navbar/>
            </div>
            <div id="filtering" className="container my-3 flex justify-between">
                <p className="mr-auto font-medium text-lg">
                    Filter By Types
                </p>
                <div className="types flex items-center gap-2">
                    {pokemonTypes.map((type: string) =>
                        <div key={type}
                             className="flex justify-center items-center rounded transition duration-300 border border-[var(--pokemon-bg)] p-1"
                        >
                            <p id={`${type}-type-text`}
                               className="z-[1] relative transition duration-300 opacity-0 mr-[-2rem]">
                                {type}
                            </p>
                            <Image
                                onMouseEnter={() => {
                                    document.getElementById(`${type}-type-text`)?.classList.remove('hidden', 'bg-green-600')
                                }}
                                onMouseLeave={() => {
                                    document.getElementById(`${type}-type-text`)?.classList.add('t', 'bg-green-600')
                                }}

                                id={`${type}-type-icon`} key={type} src={`/Pokemon_Type_Icon_${type}.png`}
                                alt={`${type} Type Icon`}
                                width={35}
                                height={35} className="cursor-pointer z-[2] relative"/>
                        </div>
                    )}
                </div>

            </div>
            <section id="pokedex"
                     className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[480px]:grid-cols-1 max-[480px]:p-10 gap-1 justify-between items-center container bg-[var(--background-card)]  rounded-t mt-3">

                {pokedexData
                    ? pokedexData.map((pokemon: any) =>
                        <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
                    ) : Array.from({length: 25}, (_, i) => (
                        <div key={i}
                             className="m-4 p-4 flex flex-col justify-center items-center border-2 border-[var(--pokemon-bg-shadow)] rounded-2xl hover:shadow-inside transition-all duration-300 bg-[var(--pokemon-bg)]">
                            <Skeleton className="w-[128px] h-[128px] mb-2 bg-[var(--pokemon-bg-shadow)]"></Skeleton>
                            <Skeleton className="h-4 w-2/3 bg-[var(--pokemon-bg-shadow)]"></Skeleton>
                        </div>
                    ))
                }
            </section>
            <div ref={ref}
                 className="rounded-b bg-[var(--background-card)] w-full container flex justify-center">

                {/* eslint-disable-next-line react/jsx-no-undef */}
                <IconSpinner
                    className="my-10 inline w-12 h-12 mx-auto text-[var(--background-card)] animate-spin dark:text-gray-600 fill-[var(--pokemon-fg)]"/>
            </div>
        </main>
    );
}

export default Pokedex;