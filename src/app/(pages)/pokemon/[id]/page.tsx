"use client"
import React from 'react';
import PokeSidebar from "@/app/_components/PokeSidebar";
import PokemonFrontBack from "@/app/_components/PokemonFrontBack";
import PokemonStats from "@/app/_components/PokemonStats";
import Navbar from "@/app/_components/Navbar";

function Pokemon({params}: any) {

    return (
        <section className="h-screen overflow-hidden">
            <div className="mx-3">
                <Navbar/>
            </div>
            <div className="w-screen flex justify-between mx-auto">

                <PokeSidebar pokemonId={params.id}></PokeSidebar>

                <main className='text-center my-3 flex mx-auto rounded bg-[var(--background-card)]'>
                    <PokemonFrontBack pokemonId={params.id}></PokemonFrontBack>

                </main>

                <PokemonStats pokemonId={params.id}></PokemonStats>
            </div>

        </section>
    );
}

export default Pokemon;