// Action creators for the todos + filter slices.

export const addTodo = (text) => ({ type: "todos/added", text });
export const toggleTodo = (id) => ({ type: "todos/toggled", id });
export const removeTodo = (id) => ({ type: "todos/removed", id });
export const setFilter = (filter) => ({ type: "filter/set", filter });
