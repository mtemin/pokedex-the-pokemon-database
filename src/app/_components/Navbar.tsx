import React, {useEffect, useState} from 'react';
import Link from "next/link";
import GoToPokemon from "@/app/_components/GoToPokemon";
import IconArrowUpDown from "@/app/_components/Icon-Arrow-Up-Down";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setCurrentPokemon} from "@/lib/features/currentPokemonSlice";

function Navbar() {

    const dispatch = useAppDispatch();
    let currentPokemon = useAppSelector((state: any) => state.currentPokemon.value)

    const getRandomInt = (min: number, max: number) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }

    function toggleNavbar() {
        const navbar: Element | null = document.querySelector('#navbar');
        if (navbar) {
            navbar.classList.toggle('max-sm:mt-[-12rem]')
            navbar.classList.toggle('max-sm:mt-[0]')
        }
    }

    const [randomPokemonId, setRandomPokemonId] = useState<null | number>(null)
    useEffect(() => {
        dispatch(setCurrentPokemon(getRandomInt(0, 1025)));
        setRandomPokemonId(getRandomInt(0, 1025))
    }, [])

    return (
        <nav id="navbar"
             className="rounded max-sm:rounded-none max-sm:border-b-2 max-sm:border-[var(--foreground-card)] max-sm:mb-4 flex justify-center mx-auto bg-[var(--background-card)] z-10 mt-3 w-full max-sm:mt-[0] max-sm:fixed max-sm:ml-[-1rem] transition-all duration-500 ">
            <ul className="flex justify-center items-center max-sm:flex-col w-full my-1">
                <Link href="/"
                      className="px-4 py-2 text-2xl  max-[760px]:text-lg max-[760px]:px-2 max-[760px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Home</Link>
                <Link href="/pokedex/"
                      className="px-4 py-2 text-2xl  max-[760px]:text-lg max-[760px]:px-2 max-[760px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Pokedex</Link>
                <Link href={`/pokemon/${randomPokemonId}`}
                      className="px-4 py-2 text-2xl  max-[760px]:text-lg max-[760px]:px-2 max-[760px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Random
                    Pokemon</Link>
                <Link href="/types"
                      className="px-4 py-2 text-2xl  max-[760px]:text-lg max-[760px]:px-2 max-[760px]:py-1 text-center font-bold text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)] cursor-pointer capitalize">Pokemons
                    By Type</Link>
                <GoToPokemon/>
                <span onClick={toggleNavbar} className="hidden max-sm:block ml-auto my-1 mr-2">
                    <IconArrowUpDown
                        className="w-6 h-6 p-1 rounded-full border border-[var(--foreground-card)] text-[var(--foreground-card)] cursor-pointer"/>
                </span>
            </ul>
        </nav>
    );
}

export default Navbar;
