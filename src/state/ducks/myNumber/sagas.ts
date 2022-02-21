import { takeEvery, put } from 'redux-saga/effects';
import { decrementNumber, incrementNumber } from './actions';
import { UpdateNumberRequestAction, UpdateOperation } from './interfaces/actions.interface';
import * as types from './types';

function* asyncUpdateNumber(action: UpdateNumberRequestAction){
    if (action.operation === UpdateOperation.increment) {
        yield put(incrementNumber());
    } else {
        yield put(decrementNumber());
    }
}

function* watchNumberSaga() {
    yield takeEvery(types.UPDATE_NUMBER_REQUEST, asyncUpdateNumber)
}

const sagas: any = [
    watchNumberSaga
];

export default sagas;