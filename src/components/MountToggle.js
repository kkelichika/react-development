// componentWillUnmount and why cleanup matters.
//
// componentWillUnmount runs right before a component is removed from the
// page. It is where you UNDO whatever componentDidMount set up: clear
// timers, remove event listeners, cancel subscriptions. Forgetting this
// causes memory leaks and "setState on an unmounted component" warnings.
//
// This demo lets me mount/unmount a child that logs both lifecycle events,
// so I can watch them happen in the console.

import React from "react";

class LoudChild extends React.Component {
  componentDidMount() {
    console.log("LoudChild mounted - I would start a timer/listener here");
    // example: a window resize listener that must be removed later
    this.handleResize = () => console.log("resized");
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    console.log("LoudChild will unmount - cleaning up");
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return <p>I am the LoudChild. Toggle me and watch the console.</p>;
  }
}

class MountToggle extends React.Component {
  state = { show: true };

  toggle = () => this.setState((prev) => ({ show: !prev.show }));

  render() {
    return (
      <div className="mount-toggle">
        <h2>Mount / Unmount</h2>
        <button onClick={this.toggle}>
          {this.state.show ? "Unmount child" : "Mount child"}
        </button>
        {/* when show becomes false, React removes LoudChild and calls
            its componentWillUnmount for cleanup */}
        {this.state.show && <LoudChild />}
      </div>
    );
  }
}

export default MountToggle;
