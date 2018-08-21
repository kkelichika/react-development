// The root component. It pulls in the small example components I build as
// I learn, so I can see them on the page.

import React from "react";
import Greeting from "./components/Greeting";
import TemperatureCalculator from "./components/Temperature";

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <Greeting />
      <TemperatureCalculator />
    </div>
  );
}

export default App;
