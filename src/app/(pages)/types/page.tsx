"use client"
import React from 'react';
import Navbar from "@/app/_components/Navbar";
import PokemonTypes from "@/app/_components/PokemonTypes";
import PokemonSearch from "@/app/_components/PokemonSearch";
import PokedexByTypeList from "@/app/_components/PokedexByTypeList";

function Page() {

    return (
        <main className="container mx-auto max-sm:p-4 max-sm:pt-0">
            <Navbar/>
            <PokemonSearch/>
            <p className="mr-auto font-medium text-lg my-2">
                Filter By Types
            </p>
            <PokemonTypes/>
            <PokedexByTypeList/>
        </main>


    );
}

export default Page;
