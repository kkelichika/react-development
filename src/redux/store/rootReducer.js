// combineReducers.
//
// As an app grows, one giant reducer becomes unwieldy. combineReducers
// lets me split state into slices, each managed by its own small reducer,
// then stitch them back into one. The KEYS I give become the shape of the
// state tree.
//
// Here the store will look like:
//   { todos: [...], filter: "all" }
// where todosReducer owns state.todos and filterReducer owns state.filter.
// Each reducer only ever sees and returns its own slice.

import { combineReducers, createStore } from "redux";
import { todosReducer } from "./todosReducer";
import { filterReducer } from "./filterReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

// the store built from the combined reducer
export const store = createStore(rootReducer);

export default rootReducer;
