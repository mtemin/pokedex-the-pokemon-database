import Image from 'next/image';

import {Progress} from 'flowbite-react';
import {Button} from 'flowbite-react';
import {useState} from 'react';
import usePokemonQuery from "@/app/_hooks/usePokemonQuery";
import Skeleton from "@/app/_components/Skeleton";


export default function PokemonStats({pokemonId}: { pokemonId: number }) {
    const {data: pokemonData, isLoading: isPokemonLoading, isError: isPokemonError} = usePokemonQuery(pokemonId);
    // const pokemonData = null;

    return (
        <aside id="pokemon-stats"
               className='font-pixel w-[15%] max-[1000px]:w-[calc(50%-0.5rem)] col-span-2 rounded bg-[var(--background-card)] ml-3 mt-3 max-[1000px]:m-0 p-2 overflow-y-scroll h-[calc(100vh-100px)] flex flex-col justify-between max-[1000px]:order-3'>
            <div id="query-keyword"
                 className="mb-3 p-2 text-center border-solid rounded border-2 border-[var(--pokemon-bg-shadow)]">
                <p className='bg-opacity-90 font-bold text-lg'>Name</p>
                {pokemonData
                    ? <p className='font-bold text-lg mb-5 capitalize'>{pokemonData.name}</p>
                    : <Skeleton className="h-6 w-1/3 mb-5 mt-2 mx-auto"/>
                    // <div role="status" className="animate-pulse h-4 bg-gray-200 rounded dark:bg-gray-700 mb-4">
                    //   {/*<div className="h-4 bg-gray-200 rounded dark:bg-gray-700 mb-4">*/}
                    //   {/*</div>*/}
                    // </div>
                }

                <p className="mb-2">Type(s)</p>
                <div className="flex justify-center flex-wrap">
                    {pokemonData
                        ? pokemonData.types.map((pokemonType: Type) => (
                            <p key={pokemonType.type.name} className="capitalize px-2 m-1  rounded"
                               style={{backgroundColor: `var(--type-${pokemonType.type.name})`}}
                            >
                                {pokemonType.type.name}
                            </p>
                        ))
                        : <Skeleton className="h-6 w-1/2"/>
                    }
                </div>

                <div className="flex items-center mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-weight">
                        <circle cx="12" cy="5" r="3"/>
                        <path
                            d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/>
                    </svg>
                    <h1 className="ml-2">Weight </h1>
                    {
                        pokemonData
                            ? <p className="ml-auto font-medium">{pokemonData.weight}</p>
                            : <Skeleton className="h-6 mt-1 w-14 ml-auto "/>
                    }
                </div>
            </div>
            <div id="pokemon-stats"
                 className='mb-3 grid-cols-8 p-2 border-solid rounded border-2 border-[var(--pokemon-bg-shadow)]'>
                <p className='col-span-8 text-center font-bold text-lg'>Stats</p>
                {pokemonData
                    ? pokemonData.stats.map((pokemonStats: Stat) => (
                        <div key={pokemonStats.stat.name} className='mb-2'>
                            <div className="flex justify-between">
                                <p className='mb-1 capitalize truncate'>{pokemonStats.stat.name}</p>
                                <p className='mb-1'>{pokemonStats.base_stat}</p>
                            </div>
                            <Progress
                                progress={pokemonStats.base_stat / 1.5}
                                size="md"
                                color='yellow'
                                textLabel={pokemonStats.stat.name}
                            />
                        </div>
                    ))
                    : Array.from({length: 6}, (_, index: number) => (
                        <div key={index} className="mb-2">
                            <div className="flex justify-between">
                                <Skeleton className="mb-1 mt-2 w-1/3 h-4"/>
                                <Skeleton className="mb-1 mt-2 w-1/5 h-4"/>
                            </div>
                            <Progress
                                progress={66}
                                size="md"
                                color='yellow'
                            />
                        </div>
                    ))
                }

            </div>
            <div id="pokemon-abilities"
                 className=' mb-3 p-2 border-solid rounded border-2 border-[var(--pokemon-bg-shadow)] flex flex-wrap flex-col justify-center'>
                <h1 className="text-lg font-bold inline-block text-center">
                    Ability(s)
                </h1>
                <div
                    className="flex flex-col mb-3">
                    {pokemonData
                        ? pokemonData.abilities.map((pokemonAbility: Ability) =>
                            <p key={pokemonAbility.ability.name}
                               className="truncate capitalize py-1">&#x2022; {pokemonAbility.ability.name}</p>
                        )
                        : <>
                            <Skeleton className="w-1/2 h-4 py-1 my-2"/>
                            <Skeleton className="w-1/2 h-4 py-1 my-2"/>
                        </>
                    }
                </div>

            </div>
            <div
                className='mb-3 flex justify-between p-2 relative rounded border-2 border-[var(--pokemon-bg-shadow)]'>
                <div id="pokemon-cry" className='w-full'>
                    <p className="mb-2 font-medium">
                        Pokemon Cry
                    </p>
                    {pokemonData ?
                        <audio controls className="w-full">
                            <source src={pokemonData.cries.latest} type="audio/ogg"/>
                            Your browser does not support the audio element.
                        </audio>
                        : <Skeleton className="w-full h-10"/>
                    }
                </div>
            </div>

        </aside>
    )
}
