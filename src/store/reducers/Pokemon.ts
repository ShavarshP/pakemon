import { PokemonAction, PokemonActionTypes, PokemonProps } from 'store/types';

interface StateTyp {
    pokemon: any;
    isLoading: boolean;
    count: number;
    countPagePokemon: number;
    pokemonList: PokemonProps[];
}

const initialState: StateTyp = {
    pokemon: undefined,
    isLoading: true,
    countPagePokemon: 16,
    count: 0,
    pokemonList: [],
};

export const pokemon = (state = initialState, action: PokemonAction): StateTyp => {
    switch (action.type) {
        case PokemonActionTypes.POKEMON_DATA_UPDATE:
            return { ...state, isLoading: false, pokemonList: action.payload };
        case PokemonActionTypes.SET_POKEMON_DATA:
            return { ...state, isLoading: false, pokemon: action.payload };
        case PokemonActionTypes.COUNT_DATA_UPDATE:
            return { ...state, isLoading: false, count: action.payload };
        case PokemonActionTypes.FETCH_USER_ERROR:
            return { ...state, isLoading: true };
        default:
            return state;
    }
};
