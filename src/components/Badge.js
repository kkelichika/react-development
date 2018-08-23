// Styling React components.
//
// A few common ways to style in 2018:
//   1. import a CSS file and use className (most common with CRA)
//   2. inline style objects: style={{ color: "red" }}
//   3. building className strings conditionally
//
// This component imports its own CSS file (Badge.css) and also shows
// choosing a className based on a prop.

import React from "react";
import "./Badge.css";

function Badge({ type = "default", children }) {
  // pick a CSS class based on the "type" prop
  const className = `badge badge-${type}`;

  return (
    <span className={className}>
      {children}
      {/* an inline style mixed in, just to show both approaches */}
      <span style={{ marginLeft: 4, opacity: 0.7 }}>•</span>
    </span>
  );
}

export default Badge;
