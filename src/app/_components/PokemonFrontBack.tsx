import React from 'react';
import usePokemonQuery from "@/app/_hooks/usePokemonQuery";
import TurnIcon from "@/app/_components/TurnIcon";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import Skeleton from "@/app/_components/Skeleton";
import {switchSide} from "@/lib/features/pokemonSideSlice";

function PokemonFrontBack({pokemonId}: { pokemonId: number }) {
    const dispatch = useAppDispatch()
    const {data: pokemonData, isLoading: isPokemonLoading, isError: isPokemonError} = usePokemonQuery(pokemonId);
    const pokemonSide = useAppSelector((state: any) => state.pokemonSide.value)
    console.log(pokemonSide)
    if (isPokemonLoading)
        return (
            <div className="flex flex-col items-center justify-start my-10">
                <Skeleton className="h-[192px] w-[192px]"/>
                <button>
                    <Skeleton className="mt-6 w-8 h-8 transition-all duration-700 hover:rotate-0"/>
                </button>
            </div>
        )
    if (pokemonData)
        return (
            <div className="flex flex-col items-center justify-start">
                {pokemonSide === 'front'
                    ? <img src={pokemonData.sprites.front_default} className="min-w-[192px]"
                           alt={`${pokemonData.name} front stripe`}/>
                    : <img src={pokemonData.sprites.back_default} className="min-w-[192px]"
                           alt={`${pokemonData.name} back stripe`}/>
                }
                <button onClick={() => dispatch(switchSide())}>
                    <TurnIcon
                        className="rotate-[215deg] mt-6 w-6 h-6 transition-all duration-300 hover:text-[var(--foreground-card)]"/>
                </button>

            </div>
        );
}

export default PokemonFrontBack;