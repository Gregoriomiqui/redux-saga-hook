import { UpdateNumberRequestAction, UpdateOperation } from "./interfaces/actions.interface";
import * as types from './types';


export const updateNumber = (operation: UpdateOperation): UpdateNumberRequestAction => {
    return {
        type: types.UPDATE_NUMBER_REQUEST,
        operation
    }
}

export const incrementNumber = () =>{
    return {
        type: types.INCREMENT_NUMBER
    }
}

export const decrementNumber = () =>{
    return {
        type: types.DECREMENT_NUMBER
    }
}