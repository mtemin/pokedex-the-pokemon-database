"use client"
import React from 'react';
import PokemonDamageModifiers from "@/app/_components/PokemonDamageModifiers";
import PokemonShowcase from "@/app/_components/PokemonShowcase";
import PokemonStats from "@/app/_components/PokemonStats";
import Navbar from "@/app/_components/Navbar";

function Pokemon({params}: any) {

    return (
        <section className="h-screen overflow-hidden">
            <div className="mx-3">
                <Navbar/>
            </div>
            <div className="w-screen flex justify-between mx-auto">
                <PokemonDamageModifiers pokemonId={params.id}></PokemonDamageModifiers>
                <main className='text-center my-3 flex flex-grow mx-auto rounded bg-[var(--background-card)]'>
                    <PokemonShowcase pokemonId={params.id}></PokemonShowcase>
                </main>

                <PokemonStats pokemonId={params.id}></PokemonStats>
            </div>

        </section>
    );
}

export default Pokemon;