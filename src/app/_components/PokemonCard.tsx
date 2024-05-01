import React from 'react';
import Image from "next/image";
import Link from "next/link";

function PokemonCard({pokemon}: { pokemon: any }) {
    return (
        <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
            <article
                className="flex flex-col justify-center items-center border-2 border-[var(--pokemon-bg-shadow)] rounded-2xl m-4 p-4 bg-[var(--pokemon-bg)] hover:shadow-inside transition-all duration-300">
                <Image src={pokemon.image} alt="Pokemon front stripe" width={128} height={128}
                       className="relative w-[128px] max-w-[128px]"/>
                <p className="capitalize text-[var(--pokemon-fg)] font-medium">{pokemon.name}</p>
            </article>
        </Link>
    );
}

export default PokemonCard;