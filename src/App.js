// The root component. It pulls in the small example components I build as
// I learn, so I can see them on the page.

import React from "react";
import Greeting from "./components/Greeting";
import Badge from "./components/Badge";

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <Greeting />

      <div>
        <Badge type="success">Active</Badge>
        <Badge type="warning">Pending</Badge>
        <Badge type="danger">Error</Badge>
        <Badge>Default</Badge>
      </div>
    </div>
  );
}

export default App;
