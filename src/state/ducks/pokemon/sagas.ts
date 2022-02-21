import { takeEvery, put, call } from 'redux-saga/effects';
import { getPokemonByNameSuccess } from './actions';
import { getPokemonByName } from './api';
import { GetPokemonByNameAction } from './interfaces/actions.interface';
import * as types from './types';

function* asyncGetPokemonByName(action: GetPokemonByNameAction){
    const response: Promise<any> = yield call(getPokemonByName, action.name);
    yield put(getPokemonByNameSuccess(response));
}

function* watchGetPokemonByName() {
    yield takeEvery(types.GET_POKEMON_BY_NAME, asyncGetPokemonByName)
}

const sagas: any = [
    watchGetPokemonByName
];

export default sagas;