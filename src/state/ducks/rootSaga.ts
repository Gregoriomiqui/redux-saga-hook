import { all, call } from 'redux-saga/effects';
import numberSagas from './myNumber/sagas';
import pokemonSagas from './pokemon/sagas';

const allSagas = [
    ...numberSagas,
    ...pokemonSagas,
];

export default function* rootSaga(){
    yield all(allSagas.map((s) => call(s)));
}