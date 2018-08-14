// State with a class component.
//
// So far my components just displayed props. STATE is data a component
// owns and can change over time, causing it to re-render. In 2018 you need
// a CLASS component to hold state (function components are stateless for
// now - I hear "hooks" are coming, but they are not here yet).
//
// Key ideas:
//   - extend React.Component
//   - set the initial state in the constructor: this.state = { ... }
//   - read it with this.state.something
//   - NEVER assign this.state directly to change it - use this.setState()
//     (more on that in the next exercises)

import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props); // always call super(props) first in a React class
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  render() {
    return (
      <div className="clock">
        <h2>Clock (class component with state)</h2>
        <p>The time is {this.state.time}</p>
      </div>
    );
  }
}

export default Clock;
