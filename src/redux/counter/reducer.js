// A Redux reducer.
//
// Redux keeps ALL app state in one object (the "store"). You never change
// it directly. Instead you "dispatch" an ACTION (a plain object describing
// what happened), and a REDUCER computes the NEW state from the old state
// and the action.
//
// A reducer is a PURE function: (state, action) => newState. It must NOT
// mutate the old state - it returns a fresh object (spread, like my JS
// immutability lessons).

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "ADD":
      return { ...state, count: state.count + action.amount };
    case "RESET":
      return { ...state, count: 0 };
    default:
      // unknown action: return the state unchanged
      return state;
  }
}

export default counterReducer;
