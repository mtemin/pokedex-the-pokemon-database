"use client"
import React from 'react';
import PokemonDamageModifiers from "@/app/_components/PokemonDamageModifiers";
import PokemonShowcase from "@/app/_components/PokemonShowcase";
import PokemonStats from "@/app/_components/PokemonStats";
import Navbar from "@/app/_components/Navbar";
import usePokemonQuery from "@/app/_hooks/usePokemonQuery";

function Pokemon({params}: { params: { id: number } }) {

    return (
        <section className="h-auto overflow-hidden max-[1000px]:overflow-y-scroll px-3">

            <div className="">
                <Navbar/>
            </div>
            <div className="w-auto flex flex-wrap justify-between mx-auto max-sm:mt-10">
                <PokemonDamageModifiers pokemonId={params.id}></PokemonDamageModifiers>
                <PokemonShowcase pokemonId={params.id}></PokemonShowcase>
                <PokemonStats pokemonId={params.id}></PokemonStats>
            </div>
        </section>
    );
}

export default Pokemon;
