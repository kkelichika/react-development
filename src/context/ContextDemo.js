// Using Context with a Provider and a Consumer.
//
// The Provider sits high up and supplies a value. A deeply nested child
// reads it with <UserContext.Consumer>, which uses a function-as-children
// (a "render prop") to receive the value. Notice NavBar/Profile do NOT
// receive the user as a prop - they pull it from context.

import React from "react";
import UserContext from "./UserContext";

// a deeply nested component that needs the user - but gets NO user prop
function Profile() {
  return (
    <UserContext.Consumer>
      {(user) => <p>Signed in as: {user.name}</p>}
    </UserContext.Consumer>
  );
}

// middle layers that just pass children through - no prop drilling here
function Sidebar() {
  return (
    <div>
      <h3>Sidebar</h3>
      <Profile />
    </div>
  );
}

class ContextDemo extends React.Component {
  state = { user: { name: "Ada" } };

  toggleUser = () => {
    this.setState((prev) => ({
      user: { name: prev.user.name === "Ada" ? "Bob" : "Ada" },
    }));
  };

  render() {
    return (
      // the Provider supplies the value to everything inside it
      <UserContext.Provider value={this.state.user}>
        <div className="context-demo">
          <h2>Context API</h2>
          <button onClick={this.toggleUser}>Switch user</button>
          {/* Sidebar/Profile are several levels down and get the user
              from context, not via props */}
          <Sidebar />
        </div>
      </UserContext.Provider>
    );
  }
}

export default ContextDemo;
