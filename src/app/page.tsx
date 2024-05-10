import PokemonDamageModifiers from '@/app/_components/PokemonDamageModifiers';
import PokemonStats from '@/app/_components/PokemonStats';
import usePokemonQuery from "@/app/_hooks/usePokemonQuery";
import PokemonShowcase from "@/app/_components/PokemonShowcase";
import {redirect} from "next/navigation";
import Navbar from "@/app/_components/Navbar";
import Image from "next/image";
import React from "react";
import Link from "next/link";


export default function Home() {
    function getRandomInt(min: number, max: number) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }

    let randomPokemonURL = `/pokemon/${getRandomInt(0, 1025)}`
    return (
        <div id="app-container">
            <main id="home" className="container mx-auto">
                <Image
                    src="/Pokédex_logo.png"
                    width={250}
                    height={100}
                    className="relative px-4 py-5 mb-3 mx-auto"
                    alt="Pokedex Logo"
                    priority
                />
                {/*<Navbar/>*/}
                <Link href="/pokedex">

                    <section
                        className="grid grid-cols-6 w-[70%] container justify-between mx-auto border-2 border-[var(--pokemon-bg)] rounded-2xl p-3 mt-6 transition-all hover:border-[var(--pokemon-fg)] duration-300">
                        <p className="col-span-4 text-xl">Browse through 1025 pokemons slowly with infinite
                            scrolling</p>
                        <Image src="/pokedex-page-cropped.png" className="col-span-2 max-h-[200px] mx-auto"
                               alt="Pokemon Page"
                               width="99999"
                               height="200"></Image>
                    </section>
                </Link>
                <Link href="/types">
                    <section
                        className="grid grid-cols-6 w-[70%] container justify-between mx-auto border-2 border-[var(--pokemon-bg)] rounded-2xl p-5 mt-6 transition-all hover:border-[var(--pokemon-fg)] duration-300">
                        <p className="col-span-4 text-xl">List all pokemons or filter by their element type or name</p>
                        <Image src="/Pokemon_Type_Icons.png" className="col-span-2 max-h-[200px] mx-auto"
                               alt="Pokemon Page"
                               width="9999"
                               height="200"></Image>
                    </section>
                </Link>
                <Link href={`${randomPokemonURL}`}>
                    <section
                        className="grid grid-cols-6 w-[70%] container justify-between mx-auto border-2 border-[var(--pokemon-bg)] rounded-2xl p-3 mt-6 transition-all hover:border-[var(--pokemon-fg)] duration-300">
                        <p className="col-span-4 text-xl">Click to go to random pokemon&apos;s detail page.
                            <br/>
                            Enter its id or name and go ta a specific pokemon.
                        </p>
                        <Image src="/pokemon-page.png" className="col-span-2 mx-auto"
                               alt="Pokemon Page"
                               width="9999"
                               height="200"></Image>
                        {/*<input type="text" className="col-span-4 rounded h-6"/>*/}
                    </section>
                </Link>
            </main>
        </div>
    )
}
