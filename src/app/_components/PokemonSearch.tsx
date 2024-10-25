"use client"
import IconSearch from "@/app/_components/icon/Icon-Search";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import React from "react";
import {setPokemonSearch} from "@/lib/features/pokemonSearchSlice";

function PokemonSearch() {
    const dispatch = useAppDispatch();
    let pokemonSearch = useAppSelector((state: any) => state.pokemonSearch.value);

    return (
        <div className="flex justify-start items-center max-sm:pt-10">
            <input onChange={(event) => dispatch(setPokemonSearch(event.target.value))} type="search"
                   placeholder="Search for a pokemon..."
                   value={pokemonSearch}
                   className="relative max-sm:w-full  text-[var(--foreground)] mt-4 focus:ring-0 mr-[-2rem] bg-[var(--background)] border-0 border-b-2 border-[var(--foreground-card)]"/>
            <IconSearch className="w-8 h-8 absolute text-black bg-black z-[2]"/>
        </div>
    );
}

export default PokemonSearch;
