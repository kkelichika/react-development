// Controlled form inputs.
//
// In React the usual pattern is a "controlled component": the input's
// value comes FROM state, and every keystroke updates state via onChange.
// React becomes the single source of truth for the form data.
//
//   value={this.state.x}  +  onChange={...}
//
// One handler can serve many inputs by using the input's `name` attribute
// and computed property names (from my JavaScript objects month!).

import React from "react";

class SignupForm extends React.Component {
  state = {
    name: "",
    email: "",
    subscribe: false,
    submitted: null,
  };

  // a single change handler for all the inputs
  handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    // checkboxes use `checked`, other inputs use `value`
    const newValue = type === "checkbox" ? checked : value;
    this.setState({ [name]: newValue }); // computed key from the input name
  };

  handleSubmit = (event) => {
    event.preventDefault(); // stop the browser from reloading the page
    this.setState({
      submitted: { name: this.state.name, email: this.state.email },
    });
  };

  render() {
    const { name, email, subscribe, submitted } = this.state;
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <h2>Sign up</h2>

        <label>
          Name:
          <input name="name" value={name} onChange={this.handleChange} />
        </label>

        <label>
          Email:
          <input name="email" type="email" value={email} onChange={this.handleChange} />
        </label>

        <label>
          <input name="subscribe" type="checkbox" checked={subscribe} onChange={this.handleChange} />
          Subscribe to the newsletter
        </label>

        {/* the button is disabled until both fields have something */}
        <button type="submit" disabled={!name || !email}>
          Submit
        </button>

        {submitted && (
          <p>Thanks, {submitted.name}! We'll email {submitted.email}.</p>
        )}
      </form>
    );
  }
}

export default SignupForm;
