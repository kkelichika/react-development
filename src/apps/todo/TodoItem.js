// A single to-do item (presentational + a couple of callbacks).
//
// It owns no state. The parent passes the todo data plus onToggle/onDelete
// callbacks. Data down, events up - the pattern I keep practicing.

import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        {todo.text}
      </label>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: 8 }}>
        delete
      </button>
    </li>
  );
}

export default TodoItem;
