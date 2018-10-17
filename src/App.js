// The root component. For the Redux exercise it wraps the app in a
// <Provider> so connected components can reach the store.

import React from "react";
import { Provider } from "react-redux";
import store from "./redux/counter/storeDemo";
import CounterConnected from "./redux/counter/CounterConnected";

function App() {
  return (
    // Provider makes the store available to every connected component
    <Provider store={store}>
      <div>
        <h1>Learning React</h1>
        <CounterConnected />
      </div>
    </Provider>
  );
}

export default App;
