// Updating state with setState.
//
// Three big rules I learned (the hard way):
//   1. NEVER change this.state directly (this.state.count++). React will
//      not notice and will not re-render. Always use this.setState().
//   2. setState MERGES the object you pass into the current state (you only
//      need to include the keys that change).
//   3. setState is ASYNCHRONOUS and may be batched. If your new value
//      depends on the old value, use the FUNCTION form:
//        this.setState(prev => ({ count: prev.count + 1 }))
//      otherwise multiple updates in a row can use a stale value.

import React from "react";

class Counter extends React.Component {
  state = { count: 0 }; // class field shorthand for initial state

  increment = () => {
    // function form, because the new value depends on the old one
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  decrement = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  reset = () => {
    // object form is fine when the value does not depend on the old state
    this.setState({ count: 0 });
  };

  incrementTwice = () => {
    // BOTH of these run, because each uses the function form (prev).
    // If I had used the object form twice, count would only go up by 1!
    this.setState((prev) => ({ count: prev.count + 1 }));
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <button onClick={this.incrementTwice}>+2</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Counter;
