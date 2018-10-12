// Reading context in a class with the contextType shortcut.
//
// The <Consumer> render-prop style is a bit clunky when a CLASS component
// needs context in its methods (not just in render). React 16.6 added a
// shortcut: set MyComponent.contextType = SomeContext, and then
// this.context holds the value everywhere in the class.
//
// (Limitation: a class can subscribe to only ONE context this way.)

import React from "react";
import UserContext from "./UserContext";

class Welcome extends React.Component {
  // tell React which context this class wants
  static contextType = UserContext;

  componentDidMount() {
    // I can use this.context anywhere in the class, even outside render
    console.log("mounted; current user is", this.context.name);
  }

  render() {
    // this.context is the value from the nearest UserContext.Provider
    const user = this.context;
    return <p>Hello from a class component, {user.name}!</p>;
  }
}

class ContextTypeDemo extends React.Component {
  state = { user: { name: "Grace" } };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <div className="context-type-demo">
          <h2>contextType (class)</h2>
          <Welcome />
          <button
            onClick={() =>
              this.setState((prev) => ({
                user: { name: prev.user.name === "Grace" ? "Alan" : "Grace" },
              }))
            }
          >
            Switch user
          </button>
        </div>
      </UserContext.Provider>
    );
  }
}

export default ContextTypeDemo;
