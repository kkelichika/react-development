// The entry point of the app.
//
// ReactDOM.render takes a React element and puts it into a real DOM node
// (the <div id="root"> in public/index.html). This is the bridge between
// React and the actual page.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
