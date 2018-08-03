// The root component. It pulls in the small example components I build as
// I learn, so I can see them on the page.

import React from "react";
import JsxBasics from "./components/JsxBasics";

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <JsxBasics />
    </div>
  );
}

export default App;
