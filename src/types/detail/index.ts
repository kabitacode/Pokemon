export interface DetailType {
    abilities?: Ability[];
    height?: number;
    id?: number;
    name?: string;
    species?: Species;
    sprites?: Sprites;
    stats?: Stat[];
    types?: Type[];
    weight?: number;
}
export interface Ability {
    ability?: Species | null;
    is_hidden?: boolean;
    slot?: number;
}
export interface Species {
    name?: string;
    url?: string;
}
export interface Stat {
    base_stat?: number;
    effort?: number;
    stat?: Species;
}
export interface Type {
    slot?: number;
    type?: Species;
}
export interface Sprites {
    back_default?: string;
    front_default?: string;
}