export interface DetailType {
    abilities?:                Ability[];
    base_experience?:          number;
    cries?:                    Cries;
    forms?:                    Species[];
    game_indices?:             GameIndex[];
    height?:                   number;
    held_items?:               unknown;
    id?:                       number;
    is_default?:               boolean;
    location_area_encounters?: string;
    moves?:                    unknown;
    name?:                     string;
    order?:                    number;
    past_abilities?:           unknown;
    past_types?:               unknown;
    species?:                  Species;
    sprites?:                  unknown;
    stats?:                    Stat[];
    types?:                    Type[];
    weight?:                   number;
}

export interface Ability {
    ability?:   Species | null;
    is_hidden?: boolean;
    slot?:      number;
}

export interface Species {
    name?: string;
    url?:  string;
}

export interface Cries {
    latest?: string;
    legacy?: string;
}

export interface GameIndex {
    game_index?: number;
    version?:    Species;
}

export interface Stat {
    base_stat?: number;
    effort?:    number;
    stat?:      Species;
}

export interface Type {
    slot?: number;
    type?: Species;
}
