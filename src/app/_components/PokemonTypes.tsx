"use client"

import {setType} from "@/lib/features/selectedTypeSlice";
import Image from "next/image";
import React from "react";
import {useAppDispatch} from "@/lib/hooks";

function PokemonTypes() {
    const pokemonTypes: string[] = [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ]
    const dispatch = useAppDispatch()


    return (
        <section id="type-filters"
                 className="types grid grid-cols-9 max-[800px]:grid-cols-6 max-[640px]:grid-cols-3 gap-2 my-2">
            {
                pokemonTypes.map((type: string) =>
                    <div key={type}
                         onClick={() => {
                             dispatch(setType({type}));
                         }}
                         className="flex flex-col justify-center items-center rounded transition cursor-pointer border border-[var(--pokemon-bg-shadow)] duration-300 p-2 hover:border-[var(--pokemon-fg)]"
                    >
                        <Image
                            id={`${type}-type-icon`} key={type} src={`/Pokemon_Type_Icon_${type}.png`}
                            alt={`${type} Type Icon`}
                            width={35}
                            height={35} className="cursor-pointer z-[2] relative mb-auto"/>
                        <p id={`${type}-type-text`}
                           className="z-[1] relative mr-2 transition duration-300 text-center">
                            {type}
                        </p>
                    </div>
                )
            }
        </section>
    );
}

export default PokemonTypes;