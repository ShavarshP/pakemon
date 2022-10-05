export interface PokemonProps {
    name: string;
    url: string;
}

export enum PokemonActionTypes {
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    POKEMON_DATA_UPDATE = 'POKEMON_DATA_UPDATE',
    SET_POKEMON_DATA = 'SET_POKEMON_DATA',
    COUNT_DATA_UPDATE = 'COUNT_DATA_UPDATE',
    LOADING_START = 'LOADING_START',
}

interface LoadingStart {
    type: PokemonActionTypes.LOADING_START;
}

interface PokemonData {
    type: PokemonActionTypes.POKEMON_DATA_UPDATE;
    payload: PokemonProps[];
}

interface SetPokemonData {
    type: PokemonActionTypes.SET_POKEMON_DATA;
    payload: unknown;
}

interface GetCountData {
    type: PokemonActionTypes.COUNT_DATA_UPDATE;
    payload: number;
}

interface FetchUserErrorAction {
    type: PokemonActionTypes.FETCH_USER_ERROR;
    payload: string;
}

export type PokemonAction = FetchUserErrorAction | LoadingStart | PokemonData | GetCountData | SetPokemonData;
