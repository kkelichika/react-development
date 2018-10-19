// A Redux reducer, now using the action type constants.
//
// Using the constants (instead of raw strings) means a typo is a missing
// import / reference error, caught immediately, rather than a silent no-op.

import { INCREMENT, DECREMENT, ADD, RESET } from "./actions";

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case ADD:
      return { ...state, count: state.count + action.amount };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export default counterReducer;
