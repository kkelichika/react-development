// Form validation.
//
// Validating a controlled form: keep the field values in state, run a
// validation function to produce error messages, and show errors next to
// the fields. A nice touch is only showing an error AFTER the user has
// "touched" (left) that field, so they are not yelled at while typing.

import React from "react";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = "Name is required";
  }
  if (!values.email.includes("@")) {
    errors.email = "Email must contain an @";
  }
  if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  return errors;
}

class ValidatedForm extends React.Component {
  state = {
    values: { name: "", email: "", password: "" },
    touched: {}, // which fields the user has interacted with
    submitted: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      values: { ...prev.values, [name]: value },
    }));
  };

  handleBlur = (e) => {
    const { name } = e.target;
    this.setState((prev) => ({
      touched: { ...prev.touched, [name]: true },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(this.state.values);
    if (Object.keys(errors).length === 0) {
      this.setState({ submitted: true });
    } else {
      // mark everything touched so all errors show on submit
      this.setState({ touched: { name: true, email: true, password: true } });
    }
  };

  render() {
    const { values, touched, submitted } = this.state;
    const errors = validate(values);

    // show an error only if the field was touched and has an error
    const showError = (field) => touched[field] && errors[field];

    if (submitted) return <p>Form submitted successfully!</p>;

    return (
      <form className="validated-form" onSubmit={this.handleSubmit}>
        <h2>Validated Form</h2>

        {["name", "email", "password"].map((field) => (
          <div key={field}>
            <label>
              {field}:
              <input
                name={field}
                type={field === "password" ? "password" : "text"}
                value={values[field]}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
            </label>
            {showError(field) && (
              <span style={{ color: "crimson" }}> {errors[field]}</span>
            )}
          </div>
        ))}

        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Submit
        </button>
      </form>
    );
  }
}

export default ValidatedForm;
