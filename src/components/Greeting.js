// A simple function component.
//
// A function component is just a JavaScript function that returns JSX. Its
// name MUST start with a capital letter - that is how React tells my
// components apart from regular HTML tags (<Greeting /> vs <div />).
//
// You use it like an HTML tag: <Greeting />.

import React from "react";

function Greeting() {
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";

  return (
    <div>
      <h2>Good {timeOfDay}!</h2>
      <p>Welcome to my little React app.</p>
    </div>
  );
}

export default Greeting;
