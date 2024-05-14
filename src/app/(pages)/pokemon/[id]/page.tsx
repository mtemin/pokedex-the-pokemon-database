"use client"
import React from 'react';
import PokemonDamageModifiers from "@/app/_components/PokemonDamageModifiers";
import PokemonShowcase from "@/app/_components/PokemonShowcase";
import PokemonStats from "@/app/_components/PokemonStats";
import Navbar from "@/app/_components/Navbar";
import usePokemonQuery from "@/app/_hooks/usePokemonQuery";

function Pokemon({params}: { params: { id: number } }) {

    return (
        <section className="h-[98vh] overflow-hidden max-[1000px]:overflow-y-scroll">

            <div className="mx-3">
                <Navbar/>
            </div>
            <div className="w-screen flex flex-wrap  justify-between mx-auto">
                <PokemonDamageModifiers pokemonId={params.id}></PokemonDamageModifiers>
                <PokemonShowcase pokemonId={params.id}></PokemonShowcase>
                <PokemonStats pokemonId={params.id}></PokemonStats>
            </div>
        </section>
    );
}

export default Pokemon;
