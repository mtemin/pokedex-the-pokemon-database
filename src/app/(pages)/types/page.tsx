"use client"
import React from 'react';
import Image from "next/image";
import Navbar from "@/app/_components/Navbar";

const pokemonTypes = [
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

function Page() {
    return (
        <section className="container mx-auto">

            <Navbar/>
            <div id="filtering" className="container my-3 flex justify-between">
                <p className="mr-auto font-medium text-lg">
                    Filter By Types
                </p>
                <div className="types flex items-center gap-2">
                    {pokemonTypes.map((type: string) =>
                        <div key={type}
                             className="flex flex-col justify-center items-center rounded transition border border-[var(--pokemon-bg-shadow)] duration-300 p-2"
                        >
                            <Image
                                // onMouseEnter={() => {
                                //     document.getElementById(`${type}-type-text`)?.classList.remove('hidden', 't')
                                // }}
                                // onMouseLeave={() => {
                                //     document.getElementById(`${type}-type-text`)?.classList.add('hidden', 't')
                                // }}

                                id={`${type}-type-icon`} key={type} src={`/Pokemon_Type_Icon_${type}.png`}
                                alt={`${type} Type Icon`}
                                width={35}
                                height={35} className="cursor-pointer z-[2] relative mb-auto"/>
                            <p id={`${type}-type-text`}
                               className="z-[1] relative mr-2 transition duration-300 text-center">
                                {type}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>

    );
}

export default Page;