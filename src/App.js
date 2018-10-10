// The root component. It pulls in the small example components I build as
// I learn, so I can see them on the page.

import React from "react";
import ContextDemo from "./context/ContextDemo";

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <ContextDemo />
    </div>
  );
}

export default App;
