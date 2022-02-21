import { PokemonState } from "./interfaces/state.interface";
import * as types from "./types";

const initialState: PokemonState = {
  data: null,
  isLoading: false,
  err: null,
};

const getPokemonByNameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_POKEMON_BY_NAME:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_POKEMON_BY_NAME_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        err: null,
      };
    case types.GET_POKEMON_BY_NAME_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.err,
      };
    default:
      return state;
  }
};

export default getPokemonByNameReducer;
