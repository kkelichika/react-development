// The root component. The capstone Notes app is self-contained (it wraps
// itself in Provider, ThemeProvider and BrowserRouter), so App just
// renders it.

import React from "react";
import NotesApp from "./apps/notes/NotesApp";

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <NotesApp />
    </div>
  );
}

export default App;
