"use client"
import React, {useEffect} from 'react';
import usePokedexQuery from "@/app/_hooks/usePokedexQuery";
import Navbar from "@/app/_components/Navbar";
import Skeleton from "@/app/_components/Skeleton";
import {useAppSelector, useAppDispatch} from '@/lib/hooks'
import {useInView} from 'react-intersection-observer';
import pokedexLimitSlice, {loadMore} from "@/lib/features/pokedexLimitSlice";
import IconSpinner from "@/app/_components/Icon-Spinner";
import PokemonCard from "@/app/_components/PokemonCard";

function Pokedex() {
    const pokedexLimit = useAppSelector((state) => state.pokedexLimit.value);
    const {ref, inView} = useInView();
    const dispatch = useAppDispatch();
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

    function loadMorePokemons() {
        dispatch(loadMore())
        refetch().then(res => {
            return res
        });
    }

    useEffect(() => {
        loadMorePokemons()
        // console.log("in view?")
        // console.log(inView)
    }, [inView])

    const {
        data: pokedexData,
        isLoading: isPokedexLoading,
        isError: isPokedexError,
        refetch
    } = usePokedexQuery(pokedexLimit, 0);

    return (
        <main className="flex flex-col items-center bg-[var(--background)] px-8 max-sm:px-0">

            <div className="container max-sm:ml-8">
                <Navbar/>
            </div>
            <section id="pokedex"
                     className="grid grid-cols-5 max-sm:mt-10 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[480px]:grid-cols-1 max-[480px]:p-10 gap-1 justify-between items-center container bg-[var(--background-card)] rounded-t mt-3">
                {pokedexData
                    ? pokedexData.map((pokemon: Pokemon) =>
                        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                    ) : Array.from({length: 25}, (_, i) => (
                        <div key={i}
                             className="m-4 p-4 flex flex-col justify-center items-center border-2 border-[var(--pokemon-bg-shadow)] rounded-2xl hover:shadow-inside transition-all duration-300 bg-[var(--pokemon-bg)]">
                            <Skeleton className="w-[128px] h-[128px] mb-2 bg-[var(--pokemon-bg-shadow)]"/>
                            <Skeleton className="h-4 w-[128px] bg-[var(--pokemon-bg-shadow)]"/>
                        </div>
                    ))
                }
            </section>
            <div ref={ref}
                 className="rounded-b bg-[var(--background-card)] w-full container flex justify-center">
                <IconSpinner
                    className="my-10 inline w-12 h-12 mx-auto text-[var(--background-card)] animate-spin dark:text-gray-600 fill-[var(--pokemon-fg)]"/>
            </div>
        </main>
    );
}

export default Pokedex;
