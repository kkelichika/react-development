// The root component. Wraps the Redux to-do app in a Provider so its
// connected components can reach the combined store.

import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store/rootReducer";
import ReduxTodoApp from "./apps/reduxTodo/ReduxTodoApp";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Learning React</h1>
        <ReduxTodoApp />
      </div>
    </Provider>
  );
}

export default App;
