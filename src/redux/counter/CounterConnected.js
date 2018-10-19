// Counter connected to Redux, now using action creators.
//
// Bonus: react-redux lets me pass an OBJECT of action creators as the
// second argument to connect, and it wraps each one in dispatch for me.
// This is the common shorthand for mapDispatchToProps.

import React from "react";
import { connect } from "react-redux";
import { increment, decrement, add, reset } from "./actions";

function Counter({ count, increment, decrement, add, reset }) {
  return (
    <div className="counter-connected">
      <h2>Redux Counter (action creators)</h2>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={() => add(5)}>+5</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

const mapStateToProps = (state) => ({ count: state.count });

// the shorthand: an object of action creators. react-redux wraps each in
// dispatch automatically, so they arrive as callable props.
const mapDispatchToProps = { increment, decrement, add, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
