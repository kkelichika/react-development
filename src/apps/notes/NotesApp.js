// Capstone: a small Notes app that brings together everything from the
// three React months:
//   - Redux store + connected components for the notes data
//   - react-router for /notes (list), /notes/:id (detail), /new (form)
//   - the theme Context for light/dark styling
//   - controlled form, route params, programmatic navigation, lists/keys
//
// It is intentionally small but uses each tool where it naturally fits.

import React from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import { notesStore } from "./store";
import { addNote, removeNote } from "./notesReducer";
import ThemeContext, { ThemeProvider } from "../../context/ThemeContext";

// --- notes list (connected) ---
function NoteListBase({ notes, removeNote }) {
  return (
    <div>
      <h2>Notes</h2>
      <Link to="/new">+ New note</Link>
      <ul>
        {notes.map((n) => (
          <li key={n.id}>
            <Link to={`/notes/${n.id}`}>{n.title}</Link>
            <button onClick={() => removeNote(n.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
const NoteList = connect((s) => ({ notes: s }), { removeNote })(NoteListBase);

// --- note detail (reads the :id route param + the store) ---
function NoteDetailBase({ notes, match }) {
  const note = notes.find((n) => n.id === Number(match.params.id));
  if (!note) return <p>Note not found. <Link to="/notes">Back</Link></p>;
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <Link to="/notes">Back to notes</Link>
    </div>
  );
}
const NoteDetail = connect((s) => ({ notes: s }))(NoteDetailBase);

// --- new note form (controlled inputs + dispatch + redirect) ---
class NewNoteBase extends React.Component {
  state = { title: "", body: "" };
  submit = (e) => {
    e.preventDefault();
    if (!this.state.title.trim()) return;
    this.props.addNote(this.state.title.trim(), this.state.body.trim());
    this.props.history.push("/notes"); // navigate back after saving
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <h2>New note</h2>
        <input
          placeholder="Title"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={this.state.body}
          onChange={(e) => this.setState({ body: e.target.value })}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}
const NewNote = connect(null, { addNote })(NewNoteBase);

// --- themed shell ---
function Shell({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        const styles =
          theme === "dark"
            ? { background: "#1d1d1d", color: "#eee" }
            : { background: "#fff", color: "#222" };
        return (
          <div style={{ ...styles, padding: 16 }}>
            <header style={{ display: "flex", gap: 12 }}>
              <strong>Notes</strong>
              <NavLink to="/notes">All</NavLink>
              <NavLink to="/new">New</NavLink>
              <button onClick={toggleTheme} style={{ marginLeft: "auto" }}>
                {theme === "light" ? "Dark" : "Light"}
              </button>
            </header>
            <hr />
            {children}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

function NotesApp() {
  return (
    <Provider store={notesStore}>
      <ThemeProvider>
        <BrowserRouter>
          <Shell>
            <Switch>
              <Route exact path="/notes" component={NoteList} />
              <Route path="/notes/:id" component={NoteDetail} />
              <Route path="/new" component={NewNote} />
              <Route component={NoteList} />
            </Switch>
          </Shell>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default NotesApp;
