// A Redux to-do app - the same UI as my August to-do, but the state now
// lives in the Redux store instead of component state. It uses the
// combined reducer (todos + filter), action creators, and connected
// components.
//
// Comparing this to the August version is a good lesson: Redux is more
// setup, and is overkill for something this small, but it shows how state
// can live OUTSIDE the component tree and be shared/predictable. Good to
// understand even if I would not always reach for it.

import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, removeTodo, setFilter } from "../../redux/store/actions";

// --- the input form (connected to dispatch addTodo) ---
class AddTodoBase extends React.Component {
  state = { text: "" };
  submit = (e) => {
    e.preventDefault();
    const text = this.state.text.trim();
    if (!text) return;
    this.props.addTodo(text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
const AddTodo = connect(null, { addTodo })(AddTodoBase);

// --- the list (reads todos + filter from the store) ---
function TodoListBase({ todos, filter, toggleTodo, removeTodo }) {
  const visible = todos.filter((t) =>
    filter === "active" ? !t.done : filter === "done" ? t.done : true
  );
  if (visible.length === 0) return <p>Nothing here.</p>;
  return (
    <ul>
      {visible.map((t) => (
        <li key={t.id}>
          <label style={{ textDecoration: t.done ? "line-through" : "none" }}>
            <input type="checkbox" checked={t.done} onChange={() => toggleTodo(t.id)} />
            {t.text}
          </label>
          <button onClick={() => removeTodo(t.id)}>x</button>
        </li>
      ))}
    </ul>
  );
}
const TodoList = connect(
  (state) => ({ todos: state.todos, filter: state.filter }),
  { toggleTodo, removeTodo }
)(TodoListBase);

// --- the filter buttons (reads filter, dispatches setFilter) ---
function FiltersBase({ filter, setFilter }) {
  return (
    <div>
      {["all", "active", "done"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          style={{ fontWeight: filter === f ? "bold" : "normal" }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
const Filters = connect((state) => ({ filter: state.filter }), { setFilter })(
  FiltersBase
);

function ReduxTodoApp() {
  return (
    <div className="redux-todo">
      <h2>Redux To-Do</h2>
      <AddTodo />
      <Filters />
      <TodoList />
    </div>
  );
}

export default ReduxTodoApp;
