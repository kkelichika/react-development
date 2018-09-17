// The root component. It pulls in the small example components I build as
// I learn, so I can see them on the page.

import React from "react";
import Greeting from "./components/Greeting";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <Greeting />

      {/* type defaults to "primary"; label is required */}
      <Button label="Save" type="primary" onClick={() => alert("saved")} />
      <Button label="Cancel" type="secondary" />
      <Button label="Delete" type="danger" disabled />
    </div>
  );
}

export default App;
