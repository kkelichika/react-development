// Programmatic navigation and Redirect.
//
// Sometimes I need to navigate from CODE, not from a clicked link - for
// example, after a successful login. Two ways:
//   1. this.props.history.push("/path") - components rendered by a <Route>
//      automatically receive a `history` prop.
//   2. render a <Redirect to="..." /> element conditionally.
//
// This fake login pushes to /dashboard on submit.

import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = { name: "", loggedIn: false };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name.trim()) return;

    // option 1: navigate imperatively via history
    // this.props.history.push("/dashboard");

    // option 2: flip a flag and render a <Redirect/> below
    this.setState({ loggedIn: true });
  };

  render() {
    // once logged in, redirect away from the login page
    if (this.state.loggedIn) {
      return <Redirect to="/about" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          placeholder="Your name"
        />
        <button type="submit">Log in</button>

        {/* this button uses history.push directly */}
        <button type="button" onClick={() => this.props.history.push("/")}>
          Cancel (go home)
        </button>
      </form>
    );
  }
}

export default Login;
