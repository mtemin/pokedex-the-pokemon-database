import React from 'react';
import Link from "next/link";
import GoToPokemon from "@/app/_components/GoToPokemon";
import IconArrowUpDown from "@/app/_components/Icon-Arrow-Up-Down";

function Navbar() {
    function getRandomInt(min: number, max: number) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }

    function toggleNavbar() {
        const navbar: Element | null = document.querySelector('#navbar');
        if (navbar)
            navbar.classList.toggle('max-sm:mt-[-12rem]')
    }

    let randomPokemonURL = `/pokemon/${getRandomInt(0, 1025)}`
    return (
        <nav id="navbar" style={{marginTop: `${toggleNavbar}`}}
             className="rounded max-sm:fixed max-sm:mx-[-2rem] max-sm:mt-0 max-sm:rounded-none bg-[var(--background-card)] z-10 mt-3 w-full max-sm:border-b border-[var(--foreground-card)] transition-all duration-500 ">
            <ul className="flex max-sm:flex-col justify-center items-center">
                <Link href="/"
                      className="px-4 py-2 text-2xl  max-[760px]:text-lg max-[760px]:px-2 max-[760px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Home</Link>
                <Link href="/pokedex/"
                      className="px-4 py-2 text-2xl  max-[760px]:text-lg max-[760px]:px-2 max-[760px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Pokedex</Link>
                <Link href={randomPokemonURL}
                      className="px-4 py-2 text-2xl  max-[760px]:text-lg max-[760px]:px-2 max-[760px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Random
                    Pokemon</Link>
                <Link href="/types"
                      className="px-4 py-2 text-2xl  max-[760px]:text-lg max-[760px]:px-2 max-[760px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Pokemons
                    By Type</Link>
                <GoToPokemon/>
                <span onClick={toggleNavbar} className=" ml-auto my-1 mr-2">
                    <IconArrowUpDown
                        className="w-6 h-6 p-1 rounded-full border border-[var(--foreground-card)] text-[var(--foreground-card)] hidden max-sm:block cursor-pointer"/>
                </span>
            </ul>
        </nav>
    );
}

export default Navbar;
