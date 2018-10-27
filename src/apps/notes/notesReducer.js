// Redux slice for the notes capstone app.

let nextId = 3;

const initialState = [
  { id: 1, title: "Welcome", body: "This notes app uses Redux + Router + Context." },
  { id: 2, title: "Shopping", body: "Milk, bread, coffee." },
];

export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case "notes/added":
      return [...state, { id: nextId++, title: action.title, body: action.body }];
    case "notes/removed":
      return state.filter((n) => n.id !== action.id);
    default:
      return state;
  }
}

export const addNote = (title, body) => ({ type: "notes/added", title, body });
export const removeNote = (id) => ({ type: "notes/removed", id });
