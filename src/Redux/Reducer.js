import * as CONSTANTS from "./Constants";

// If multiple components need access to some data, in that case we store such data in redux.
const initialState = {
  yokis: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_YOKIS:
      return { ...state, yokis: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
