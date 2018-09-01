// Lifecycle methods and componentDidMount.
//
// Class components have "lifecycle" methods that React calls at certain
// moments. The order for a mounting component:
//   1. constructor()        - set up initial state
//   2. render()             - produce the JSX
//   3. componentDidMount()  - runs ONCE, right after it is first on screen
//
// componentDidMount is the right place to start things that touch the
// outside world: timers, subscriptions, data fetching. Here I start a
// timer that updates the time every second.

import React from "react";

class TickingClock extends React.Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    // start a timer once the component is on the page
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    // ALWAYS clean up timers, or they keep running after the component is
    // gone and cause warnings/leaks. (More on cleanup next exercise.)
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="ticking-clock">
        <h2>Ticking Clock</h2>
        <p>{this.state.time}</p>
        <small>(updates every second via a timer started in componentDidMount)</small>
      </div>
    );
  }
}

export default TickingClock;
