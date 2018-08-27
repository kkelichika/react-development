// A To-Do app - the classic React capstone. It brings together the whole
// month: state, controlled input, events, immutable updates, lists & keys,
// conditional rendering, child components, and a derived filter.
//
// The parent owns ALL the state (the list, the input text, the filter).
// The children are presentational and report back through callbacks.

import React from "react";
import TodoItem from "./TodoItem";

class TodoApp extends React.Component {
  state = {
    todos: [
      { id: 1, text: "Learn props", done: true },
      { id: 2, text: "Learn state", done: true },
      { id: 3, text: "Build a todo app", done: false },
    ],
    text: "",
    filter: "all", // all | active | done
    nextId: 4,
  };

  handleChange = (e) => this.setState({ text: e.target.value });

  addTodo = (e) => {
    e.preventDefault();
    const text = this.state.text.trim();
    if (!text) return;
    this.setState((prev) => ({
      // immutable update: a NEW array with the new item appended (spread!)
      todos: [...prev.todos, { id: prev.nextId, text, done: false }],
      text: "",
      nextId: prev.nextId + 1,
    }));
  };

  toggle = (id) => {
    this.setState((prev) => ({
      // map to a new array, replacing only the toggled item
      todos: prev.todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      ),
    }));
  };

  remove = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((t) => t.id !== id),
    }));
  };

  setFilter = (filter) => this.setState({ filter });

  get visibleTodos() {
    const { todos, filter } = this.state;
    if (filter === "active") return todos.filter((t) => !t.done);
    if (filter === "done") return todos.filter((t) => t.done);
    return todos;
  }

  render() {
    const { text, filter, todos } = this.state;
    const remaining = todos.filter((t) => !t.done).length;

    return (
      <div className="todo-app">
        <h2>To-Do</h2>

        <form onSubmit={this.addTodo}>
          <input
            value={text}
            onChange={this.handleChange}
            placeholder="What needs doing?"
          />
          <button type="submit">Add</button>
        </form>

        <div className="filters">
          {["all", "active", "done"].map((f) => (
            <button
              key={f}
              onClick={() => this.setFilter(f)}
              style={{ fontWeight: filter === f ? "bold" : "normal" }}
            >
              {f}
            </button>
          ))}
        </div>

        {this.visibleTodos.length === 0 ? (
          <p>Nothing here.</p>
        ) : (
          <ul>
            {this.visibleTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={this.toggle}
                onDelete={this.remove}
              />
            ))}
          </ul>
        )}

        <p>{remaining} item(s) left</p>
      </div>
    );
  }
}

export default TodoApp;
