import { GetPokemonByNameAction } from "./interfaces/actions.interface";
import * as types from './types';


export const getPokemonByName = (name: string): GetPokemonByNameAction => {
    return {
        type: types.GET_POKEMON_BY_NAME,
        name
    }
}

export const getPokemonByNameSuccess = (payload: any) =>{
    return {
        type: types.GET_POKEMON_BY_NAME_SUCCESS,
        payload
    }
}

export const getPokemonByNameFailure = (err: any) => {
    return {
        type: types.GET_POKEMON_BY_NAME_FAILURE,
        err
    }
}
