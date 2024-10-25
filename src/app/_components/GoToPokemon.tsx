import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import IconChevronUp from "@/app/_components/icon/Icon-ChevronUp";
import Link from "next/link";
import {setCurrentPokemon} from "@/lib/features/currentPokemonSlice";

function GoToPokemon() {
    const dispatch = useAppDispatch();
    const [searchInput, setSearchInput] = useState("");
    let currentPokemon = useAppSelector((state: any) => state.currentPokemon.value)

    return (
        <div className="flex justify-center items-center">

            <input type="text" id="nav-pokemon"
                   onChange={event => setSearchInput(event.target.value)}
                   className="w-[200px] mx-4 my-2 text-md truncate max-[640px]:text-sm max-[640px]:mx-2 max-[640px]:my-1 text-[var(--foreground-card)] hover:border-[var(--pokemon-fg)] focus:border-[var(--pokemon-fg)] bg-[var(--background-card)] border border-[var(--foreground-card)] rounded-lg"
                   placeholder="Go to pokemon..." value={searchInput}/>
            <Link href={`/pokemon/${searchInput}`}>
                <IconChevronUp
                    className="rotate-90 w-8 h-8 ml-[-3.5rem] max-sm:ml-[-2.5rem] cursor-pointer text-[var(--foreground-card)] hover:text-[var(--pokemon-fg)]"/>
            </Link>
        </div>
    );
}

export default GoToPokemon;
