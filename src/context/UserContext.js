// Context API: sharing data without passing props through every level.
//
// "Prop drilling" is when you pass a prop down through many components
// that do not use it, just to reach a deep one. The Context API (the new
// stable version in React 16.3, 2018) avoids that: a Provider holds a
// value, and any descendant can read it with a Consumer - no matter how
// deep.
//
// React.createContext(defaultValue) returns an object with a Provider and
// a Consumer.

import React from "react";

// the default value is used if a Consumer has no Provider above it
const UserContext = React.createContext({ name: "Guest" });

export default UserContext;
