type  Pokemon = {
    id: number;
    name: string;
    species: Species;
    location_area_encounters: string;
    abilities: Ability[];
    base_experience: number;
    forms: Species[];
    stats: Stat[];
    types: Type[];
    sprites: Sprites;
    weight: number;
}

type  Ability = {
    ability: Species;
}

type  Species = {
    url: string;
    name: string;
}

type  Sprites = {
    front_default: string;
    back_default: string;
}

type  Stat = {
    base_stat: number;
    effort: number;
    stat: StatUrl;
}

type StatUrl = {
    name: string;
    url: string;
}

type  Type = {
    slot: number;
    type: TypeClass;
}

type DamageRelation = {
    name: string,
    url: string
}
