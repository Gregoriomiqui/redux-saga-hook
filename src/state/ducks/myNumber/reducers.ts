import { NumberOperation } from "./interfaces/state.interface";
import * as types from "./types";

const initialState: NumberOperation = {
  num: 0,
};

const numberReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.INCREMENT_NUMBER:
      return {
        ...state,
        num: state.num + 1,
      };

    case types.DECREMENT_NUMBER:
      if (state.num - 1 < 0) {
        return state;
      } else {
        return {
          ...state,
          num: state.num - 1,
        };
      }

    default:
      return state;
  }
};

export default numberReducer;
