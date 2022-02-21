import * as types from '../types';

export interface GetPokemonByNameAction {
    type: typeof types.GET_POKEMON_BY_NAME;
    name: string
}

export interface GetPokemonByNameActionSuccess {
    type: typeof types.GET_POKEMON_BY_NAME;
    payload: any
}

export interface GetPokemonByNameActionFailure { 
    type: typeof types.GET_POKEMON_BY_NAME;
    err: any
}
