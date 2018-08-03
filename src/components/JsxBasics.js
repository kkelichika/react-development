// JSX basics.
//
// JSX is the HTML-looking syntax in React. It is not really HTML - Babel
// turns it into React.createElement(...) calls. A few rules I learned:
//   - you must return ONE root element (wrap siblings in a div or fragment)
//   - use { } to drop JavaScript expressions into the markup
//   - className instead of class, htmlFor instead of for (because class/for
//     are reserved words in JS)
//   - style takes an object: style={{ color: "red" }}

import React from "react";

function JsxBasics() {
  const name = "kkelichika";
  const year = 2018;
  const isLearning = true;

  return (
    <div className="jsx-basics">
      <h2>JSX Basics</h2>

      {/* curly braces let me embed JavaScript expressions */}
      <p>Hello, {name}!</p>
      <p>It is {year}, and 2 + 2 = {2 + 2}.</p>

      {/* expressions can be inline, including ternaries */}
      <p>{isLearning ? "Still learning" : "All done"}</p>

      {/* style is an object; note the double braces */}
      <p style={{ color: "teal", fontWeight: "bold" }}>Styled with an object</p>

      {/* className, not class */}
      <span className="highlight">A span with a className</span>
    </div>
  );
}

export default JsxBasics;
