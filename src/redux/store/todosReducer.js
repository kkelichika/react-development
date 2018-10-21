// A reducer that manages a list of todos (immutable updates throughout).

let nextId = 1;

const initialState = [];

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/added":
      // return a NEW array with the new todo appended
      return [...state, { id: nextId++, text: action.text, done: false }];
    case "todos/toggled":
      return state.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t
      );
    case "todos/removed":
      return state.filter((t) => t.id !== action.id);
    default:
      return state;
  }
}
