// The store for the notes app.

import { createStore } from "redux";
import { notesReducer } from "./notesReducer";

export const notesStore = createStore(notesReducer);
