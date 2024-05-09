"use client"
import React from 'react';
import PokemonDamageModifiers from "@/app/_components/PokemonDamageModifiers";
import PokemonShowcase from "@/app/_components/PokemonShowcase";
import PokemonStats from "@/app/_components/PokemonStats";
import Navbar from "@/app/_components/Navbar";
import usePokemonQuery from "@/app/_hooks/usePokemonQuery";

function Pokemon({params}: any) {
    let pokemonId = params.id;
    const {isError: isPokemonError} = usePokemonQuery(pokemonId);
    let mehmet = true;

    return (
        <section className="h-screen overflow-hidden max-[1000px]:overflow-y-scroll">
            {/*{mehmet &&*/}
            {/*    <div*/}
            {/*        className="absolute bg-rose-500 w-[50%] h-[25%] z-[3] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] rounded-2xl flex justify-center items-center">eq</div>*/}
            {/*}*/}
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