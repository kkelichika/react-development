// Composition with props.children.
//
// Components can be nested inside each other. Whatever you put BETWEEN a
// component's tags arrives as a special prop called "children". This lets
// me build a generic wrapper (like a Card) and put anything inside it.
//
// This is React's preferred way to share layout/behaviour - composition,
// just like I practiced in plain JavaScript.

import React from "react";

function Card({ title, children }) {
  return (
    <div className="card" style={{ border: "1px solid #ccc", padding: 12, margin: 8 }}>
      {title && <h3>{title}</h3>}
      {/* children is whatever was placed between <Card> and </Card> */}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
