// Using a Redux store WITHOUT React, to understand the core ideas first.
//
// createStore(reducer) builds the store. The store has three methods:
//   getState()        - read the current state
//   dispatch(action)  - send an action to update the state
//   subscribe(fn)     - run fn whenever the state changes
//
// This is plain Redux; the next exercise connects it to React.

import { createStore } from "redux";
import counterReducer from "./reducer";

// build the store from the reducer
const store = createStore(counterReducer);

export function runStoreDemo() {
  const log = [];
  log.push("start: " + JSON.stringify(store.getState())); // { count: 0 }

  // react to every change
  const unsubscribe = store.subscribe(() => {
    log.push("changed: " + JSON.stringify(store.getState()));
  });

  // dispatch actions to change the state
  store.dispatch({ type: "INCREMENT" }); // count -> 1
  store.dispatch({ type: "INCREMENT" }); // count -> 2
  store.dispatch({ type: "ADD", amount: 5 }); // count -> 7
  store.dispatch({ type: "DECREMENT" }); // count -> 6
  store.dispatch({ type: "RESET" }); // count -> 0

  unsubscribe(); // stop listening
  return log;
}

export default store;
