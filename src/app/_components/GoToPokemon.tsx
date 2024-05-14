import React from 'react';
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import IconChevronUp from "@/app/_components/Icon-ChevronUp";
import Link from "next/link";
import {currentPokemonSlice, setCurrentPokemon} from "@/lib/features/currentPokemonSlice";

function GoToPokemon() {
    const dispatch = useAppDispatch();
    let currentPokemon = useAppSelector((state: any) => state.currentPokemon.value)

    return (
        <div className="flex justify-center items-center">

            <input type="text" id="nav-pokemon"
                   onChange={event => dispatch(setCurrentPokemon(event.target.value))}
                   className="w-[200px] mx-4 my-2 text-md truncate max-[640px]:text-sm max-[640px]:mx-2 max-[640px]:my-1 text-[var(--foreground-card)] hover:border-[var(--pokemon-fg)] focus:border-[var(--pokemon-fg)] bg-[var(--background-card)] border border-[var(--foreground-card)] rounded-lg"
                   placeholder="Go to pokemon..." value={currentPokemon}/>
            <Link href={`/pokemon/${currentPokemon}`}>
                <IconChevronUp
                    className="rotate-90 w-8 h-8 ml-[-3.5rem] max-sm:ml-[-2.5rem] cursor-pointer text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)]"/>
            </Link>
        </div>
    );
}

export default GoToPokemon;
