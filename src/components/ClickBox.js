// Handling events.
//
// React events look like onClick, onChange, onSubmit (camelCase), and you
// pass a FUNCTION, not a string: onClick={this.handleClick}.
//
// The "lost this" lesson from my JavaScript OOP month matters here! A
// normal method passed as a handler loses its `this`. The common 2018
// fixes are:
//   1. bind in the constructor: this.handleClick = this.handleClick.bind(this)
//   2. use an arrow function class field (no binding needed)
// I show both.

import React from "react";

class ClickBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastEvent: "nothing yet" };

    // FIX 1: bind so `this` is the instance inside handleClick
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // works because we bound it above
    this.setState({ lastEvent: "clicked!" });
  }

  // FIX 2: an arrow class field keeps `this` automatically - no binding
  handleMouseEnter = () => {
    this.setState({ lastEvent: "mouse entered" });
  };

  render() {
    return (
      <div className="click-box">
        <h2>Events</h2>
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseEnter={this.handleMouseEnter}>Hover me</button>

        {/* you can also pass an inline arrow, handy for passing arguments */}
        <button onClick={() => this.setState({ lastEvent: "inline arrow" })}>
          Inline handler
        </button>

        <p>Last event: {this.state.lastEvent}</p>
      </div>
    );
  }
}

export default ClickBox;
