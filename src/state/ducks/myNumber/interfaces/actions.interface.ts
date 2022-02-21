import * as types from '../types';


export enum UpdateOperation {
    increment = 'incre',
    decrement = 'decre'
}


export interface UpdateNumberRequestAction {
    type: typeof types.UPDATE_NUMBER_REQUEST;
    operation: UpdateOperation
}

