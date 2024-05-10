import Image from 'next/image';
import usePokedexQuery from "@/app/_hooks/usePokedexQuery";
import Skeleton from "@/app/_components/Skeleton";
import Link from "next/link";
import usePokedexByTypeQuery from "@/app/_hooks/usePokedexByTypeQuery";
import usePokemonQuery from "@/app/_hooks/usePokemonQuery";
import useTypeQuery from "@/app/_hooks/useTypeQuery";
import DamageRelations from "@/app/_components/DamageRelations";
import IconShield from "@/app/_components/Icon-Shield";
import SwordIcon from "@/app/_components/Icon-Swords";
import IconTick from "@/app/_components/Icon-Tick";
import IconMinus from "@/app/_components/Icon-Minus";

export default function PokemonDamageModifiers({pokemonId}: { pokemonId: number }) {
    const {data: pokemonData, isLoading: isPokemonLoading, isError: isPokemonError} = usePokemonQuery(pokemonId);
    let pokeType = pokemonData?.types[0].type.name;

    const {
        data: typeData,
        isLoading: isTypeDataLoading,
        isError: isTypeDataError
    } = useTypeQuery(pokeType);

    return (
        <aside id="sidebar"
               className="m-3 max-[1000px]:mt-0 overflow-y-scroll col-span-2 w-auto max-[1000px]:w-[calc(50%-1.25rem)] max-[1000px]:mr-1.5 h-[calc(100vh-90px)] flex flex-col justify-between scrollbar-thumb-sky-700 scrollbar-track-sky-300 max-[1000px]:order-2">
            <div className="bg-[var(--background-card)] rounded-t">
                {/*<Image*/}
                {/*    src="/Pokédex_logo.png"*/}
                {/*    width={200}*/}
                {/*    height={50}*/}
                {/*    className="relative px-4 py-5 mb-3 mx-auto bg-[var(--background-card)]"*/}
                {/*    alt="Pokedex Logo"*/}
                {/*    priority*/}
                {/*/>*/}
            </div>
            <ul className="bg-[var(--background-card)] flex flex-col h-full w-full rounded-b py-4 px-2">
                <div className="flex justify-center">
                    {typeData
                        ?
                        <p key={typeData.name} className="capitalize px-2 mx-2 rounded"
                           style={{backgroundColor: `var(--type-${typeData.name})`}}
                        >
                            {typeData.name}
                        </p>
                        : <Skeleton className="h-6 w-1/3"/>
                    }
                </div>
                <h2 className="my-2 mx-auto text-center font-medium">Damage modifiers</h2>
                <SwordIcon className="p-1 rounded w-10 h-10 my-2 mx-auto"/>
                <div id="modifier-attack" className="flex justify-between mb-6">
                    <div className="flex flex-col px-1 w-1/2">
                        <h3 className="max-w-full truncate mb-2 flex items-center"><IconTick
                            className="w-4 h-4 rounded-full bg-green-600 inline mr-1"/>
                            <span
                                className="font-medium text-center">2X</span>&nbsp;To</h3>
                        {typeData
                            ? typeData.damage_relations.double_damage_to.map((ddto: DamageRelation) =>
                                <DamageRelations key={ddto.name} name={ddto.name}/>
                            )
                            : <>
                                <Skeleton className="w-full h-6 mb-1"/>
                                <Skeleton className="w-full h-6 mb-1"/>
                                <Skeleton className="w-full h-6 mb-1 "/>

                            </>
                        }
                    </div>
                    <div className="flex flex-col px-1 w-1/2">
                        <h3 className="max-w-full truncate mb-2 flex items-center"><IconMinus
                            className="w-4 h-4 inline rounded-full bg-rose-600 mr-1"/><span
                            className="font-medium text-center">1/2</span>&nbsp;To</h3>
                        {typeData
                            ? typeData.damage_relations.half_damage_to.map((hdto: DamageRelation) =>
                                <DamageRelations key={hdto.name} name={hdto.name}/>
                            )
                            : <>
                                <Skeleton className="w-full h-6 mb-1"/>
                                <Skeleton className="w-full h-6 mb-1"/>
                                <Skeleton className="w-full h-6 mb-1 "/>
                            </>
                        }
                    </div>
                </div>
                <IconShield className="rounded p-1 w-10 h-10 mx-auto mb-2"/>
                <div id="modifier-defense" className="flex justify-between mb-6">
                    <div className="flex flex-col px-1 w-1/2">
                        <h3 className="max-w-full truncate mb-2 flex items-center"><IconMinus
                            className="w-4 h-4 inline rounded-full bg-rose-600 mr-1"/><span
                            className="font-medium text-center">2X</span>&nbsp;From</h3>

                        {typeData
                            ? typeData.damage_relations.double_damage_from.map((ddfr: DamageRelation) =>
                                <DamageRelations key={ddfr.name} name={ddfr.name}/>
                            )
                            : <>
                                <Skeleton className="w-full h-6 mb-1"/>
                                <Skeleton className="w-full h-6 mb-1"/>
                                <Skeleton className="w-full h-6 mb-1 "/>
                            </>
                        }
                    </div>
                    <div className="flex flex-col px-1 w-1/2">
                        <h3 className="max-w-full truncate mb-2 flex items-center "><IconTick
                            className="w-4 h-4 inline rounded-full bg-green-600 mr-1"/><span
                            className="font-medium text-center">1/2 </span>&nbsp;                            From</h3>

                        {typeData
                            ? typeData.damage_relations.half_damage_from.map((hdfr: DamageRelation) =>
                                <DamageRelations key={hdfr.name} name={hdfr.name}/>
                            )
                            : <>
                                <Skeleton className="w-full h-6 mb-1"/>
                                <Skeleton className="w-full h-6 mb-1"/>
                                <Skeleton className="w-full h-6 mb-1 "/>
                            </>
                        }
                    </div>
                </div>

                {/*    {*/}
                {/*        pokedexByTypeData*/}
                {/*            ? <p className="font-medium px-4">Pokemons with same type as <span*/}
                {/*                className="capitalize">{pokemonData.name}</span></p>*/}
                {/*            : <><Skeleton className="h-6 w-full"/><Skeleton className="h-6 w-full"/></>*/}
                {/*    }*/}
                {/*    {pokedexByTypeData &&*/}
                {/*        pokedexByTypeData.map((pokemon: any) => (*/}
                {/*            <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>*/}
                {/*                <li*/}
                {/*                    className="flex justify-between items-center pr-4 pl-2 my-1 capitalize cursor-pointer bg-[var(--background-card)] hover:bg-[var(--pokemon-bg)]">*/}
                {/*                    <img className="max-w-[40%] max-h-[80px] "*/}
                {/*                         src={pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites.front_default}*/}
                {/*                         alt={pokemon.name}/>*/}
                {/*                    <p className="truncate">*/}
                {/*                        {pokemon.name}*/}
                {/*                    </p>*/}
                {/*                </li>*/}
                {/*            </Link>*/}
                {/*        ))*/}
                {/*    }*/}
            </ul>
        </aside>
    )
}
