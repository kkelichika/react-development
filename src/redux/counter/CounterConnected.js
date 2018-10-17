// Connecting Redux to React with react-redux.
//
// Two pieces from react-redux:
//   <Provider store={store}> wraps the app and makes the store available.
//   connect(mapStateToProps, mapDispatchToProps)(Component) gives a
//     component the slice of state and the dispatch functions it needs, as
//     PROPS. The component itself stays "dumb" - it does not know about
//     Redux directly.

import React from "react";
import { connect } from "react-redux";

// a plain presentational component - just props, no Redux knowledge
function Counter({ count, onIncrement, onDecrement, onReset }) {
  return (
    <div className="counter-connected">
      <h2>Redux Counter (connected)</h2>
      <p>Count: {count}</p>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
      <button onClick={onReset}>reset</button>
    </div>
  );
}

// pick what slice of the store this component needs -> becomes props
function mapStateToProps(state) {
  return { count: state.count };
}

// map dispatch calls to prop functions the component can call
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" }),
    onReset: () => dispatch({ type: "RESET" }),
  };
}

// connect wires the plain component to the store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
