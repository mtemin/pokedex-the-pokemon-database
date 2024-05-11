import React from 'react';
import Link from "next/link";
import IconChevronUp from "@/app/_components/Icon-ChevronUp";
import GoToPokemon from "@/app/_components/GoToPokemon";

function Navbar() {
    function getRandomInt(min: number, max: number) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }
    
    let randomPokemonURL = `/pokemon/${getRandomInt(0, 1025)}`
    return (
        <nav className="rounded bg-[var(--background-card)] mt-3 w-full">
            <ul className="flex justify-center items-center">
                <Link href="/"
                      className="px-4 py-2 text-2xl max-[640px]:text-lg max-[640px]:px-2 max-[640px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Home</Link>
                <Link href="/pokedex/"
                      className="px-4 py-2 text-2xl max-[640px]:text-lg max-[640px]:px-2 max-[640px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Pokedex</Link>
                <Link href={randomPokemonURL}
                      className="px-4 py-2 text-2xl max-[640px]:text-lg max-[640px]:px-2 max-[640px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Random
                    Pokemon</Link>
                <Link href="/types"
                      className="px-4 py-2 text-2xl max-[640px]:text-lg max-[640px]:px-2 max-[640px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Pokemons
                    By Type</Link>
                <GoToPokemon/>

            </ul>
        </nav>
    );
}

export default Navbar;
