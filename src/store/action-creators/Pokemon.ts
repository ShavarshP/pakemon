import { Dispatch } from 'redux';
import axios from 'axios';

import { PokemonAction, PokemonActionTypes } from 'store/types';
const API_URL = process.env.REACT_APP_API;

export const getPokemonList = (page: number, count: number) => {
    return async (dispatch: Dispatch<PokemonAction>) => {
        try {
            const { data } = await axios.get(`${API_URL}pokemon?limit=${count}&offset=${page}`);
            dispatch({
                type: PokemonActionTypes.COUNT_DATA_UPDATE,
                payload: data.count,
            });
            dispatch({
                type: PokemonActionTypes.POKEMON_DATA_UPDATE,
                payload: data.results,
            });
        } catch (e) {
            dispatch({
                type: PokemonActionTypes.FETCH_USER_ERROR,
                payload: 'Error',
            });
        }
    };
};

export const getPokemon = (id: number) => {
    return async (dispatch: Dispatch<PokemonAction>) => {
        try {
            const { data } = await axios.get(`${API_URL}pokemon/${id}`);
            dispatch({
                type: PokemonActionTypes.SET_POKEMON_DATA,
                payload: data,
            });
        } catch (e) {
            dispatch({
                type: PokemonActionTypes.FETCH_USER_ERROR,
                payload: 'Error',
            });
        }
    };
};
