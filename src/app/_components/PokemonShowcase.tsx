import React, {useEffect} from 'react';
import usePokemonQuery from "@/app/_hooks/usePokemonQuery";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {switchSide} from "@/lib/features/pokemonSideSlice";
import IconChevronUp from "@/app/_components/Icon-ChevronUp";
import IconTurn from "@/app/_components/Icon-Turn";
import Skeleton from "@/app/_components/Skeleton";
import PathName from "@/app/_components/PathName";
import Link from "next/link";
import {setCurrentPokemon} from "@/lib/features/currentPokemonSlice";

function PokemonShowcase({pokemonId}: { pokemonId: number }) {
    const dispatch = useAppDispatch();
    const {data: pokemonData, isLoading: isPokemonLoading, isError: isPokemonError} = usePokemonQuery(pokemonId);
    const pokemonSide = useAppSelector((state: any) => state.pokemonSide.value)

    return (
        <main
            className='text-center max-[1000px]:w-full m-3 max-[1000px]:mt-3 flex flex-grow max-[1000px]:order-1 mx-3 rounded bg-[var(--background-card)]'>
            <section id="pokemon-showcase"
                     className="w-full flex justify-between items-center ml-2 max-[1000px]:m-0 p-4">
                {pokemonData
                    ? <Link href={`/pokemon/${pokemonData?.id - 1}`}
                            onClick={() => dispatch(setCurrentPokemon(pokemonId + 1))}>
                        <IconChevronUp
                            className="w-12 h-12 max-[1000px]:w-8 max-[1000px]:h-8 cursor-pointer hover:bg-[--background-card] rotate-[-90deg]"/>
                        <p className="font-medium max-[1000px]:text-sm ">Previous <br/> Pokemon</p>
                    </Link>
                    : <Skeleton className="w-12 h-20"/>
                }
                {pokemonData &&
                    <div id="pokemon-stripes" className="flex flex-col items-center justify-start">
                        {pokemonSide === 'front'
                            ? <img src={pokemonData.sprites.front_default}
                                   className="min-w-[192px] max-[1000px]:min-w-[128px]"
                                   alt={`${pokemonData.name} front stripe`}/>
                            : <img src={pokemonData.sprites.back_default}
                                   className="min-w-[192px] max-[1000px]:min-w-[128px]"
                                   alt={`${pokemonData.name} back stripe`}/>
                        }
                        <button onClick={() => dispatch(switchSide())}>
                            <IconTurn
                                className="rotate-[215deg] mt-6 w-6 h-6 transition-all duration-300 hover:text-[var(--foreground-card)]"/>
                        </button>
                    </div>
                }
                {isPokemonLoading &&
                    <div className="flex flex-col items-center"><Skeleton
                        className="h-[192px] w-[192px] max-[1000px]:w-[128px] max-[1000px]:h-[128px]"/>
                        <button>
                            <Skeleton className="mt-6 w-8 h-8 transition-all duration-700 hover:rotate-0"/>
                        </button>
                    </div>
                }
                {isPokemonError &&
                    <div className="flex flex-col items-center">
                        <div style={{animation: "none"}}
                             className="h-[192px] w-[192px] max-[1000px]:w-[128px] max-[1000px]:h-[128px] bg-rose-500 rounded"/>
                        {/*<button>*/}
                        <p className="text-lg font-medium mt-6">No Pokemon found with this id :
                            <PathName isShort={true}/>
                        </p>
                    </div>
                }
                {pokemonData
                    ? <Link href={`/pokemon/${pokemonData?.id + 1}`}
                            onClick={() => dispatch(setCurrentPokemon(pokemonId + 1))}
                            className="flex flex-col items-center justify-center">
                        <IconChevronUp className="w-12 h-12 cursor-pointer hover:bg-[--background-card] rotate-90"/>
                        <p className="font-medium max-[1000px]:text-sm">Next <br/> Pokemon</p>
                    </Link>
                    : <Skeleton className="w-12 h-20"/>
                }
            </section>
        </main>
    );
}

export default PokemonShowcase;
