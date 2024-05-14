import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {currentPokemonSlice, setCurrentPokemon} from "@/lib/features/currentPokemonSlice";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";


function PokemonCard({pokemon}: { pokemon: any }) {

    function getRandomInt(min: number, max: number) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }

    const dispatch = useAppDispatch();
    let currentPokemon = useAppSelector((state: any) => state.currentPokemon.value)
    return (
        // <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}
        <Link key={pokemon.id} href={{pathname: `/pokemon/${pokemon.id}`, query: {id: pokemon.id}}}
              onClick={() => dispatch(setCurrentPokemon(pokemon.id))}>
            <article
                className="flex flex-col justify-center items-center border-2 border-[var(--pokemon-bg-shadow)] rounded-2xl m-4 p-4 bg-[var(--pokemon-bg)] hover:shadow-inside transition-all duration-300">
                <Image src={pokemon.image} alt="Pokemon front stripe" width={128} height={128}
                       className="relative w-[128px] max-w-[128px]"/>
                <p className="capitalize text-[var(--pokemon-fg)] font-medium">{pokemon.name}</p>
            </article>
        </Link>
    );
}

export default PokemonCard;
