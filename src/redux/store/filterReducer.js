// A separate, tiny reducer that just tracks the current filter string.
// Keeping unrelated concerns in their own reducers keeps each one small.

export function filterReducer(state = "all", action) {
  switch (action.type) {
    case "filter/set":
      return action.filter;
    default:
      return state;
  }
}
