// defaultProps and PropTypes.
//
// - defaultProps gives a prop a fallback value when the parent does not
//   pass it.
// - PropTypes documents and CHECKS the types of props. In development,
//   React warns in the console if a prop is the wrong type or a required
//   one is missing. It is great for catching mistakes early.
//
// PropTypes used to live on React itself, but since React 15.5 it is a
// separate package: import PropTypes from "prop-types".

import React from "react";
import PropTypes from "prop-types";

function Button({ label, type, disabled, onClick }) {
  return (
    <button className={`btn btn-${type}`} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

// describe the expected props
Button.propTypes = {
  label: PropTypes.string.isRequired, // must be a string, must be passed
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

// fallbacks when a prop is omitted
Button.defaultProps = {
  type: "primary",
  disabled: false,
  onClick: () => {},
};

export default Button;
