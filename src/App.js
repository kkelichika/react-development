// The root component. It pulls in the small example components I build as
// I learn, so I can see them on the page.

import React from "react";
import RouterApp from "./routing/RouterApp";

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <RouterApp />
    </div>
  );
}

export default App;
