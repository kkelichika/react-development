// The root component. It pulls in the small example components I build as
// I learn, so I can see them on the page.

import React from "react";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <Greeting />

      {/* the SAME component, reused with different props */}
      <UserCard name="Ada" role="admin" age={36} />
      <UserCard name="Bob" role="editor" />
    </div>
  );
}

export default App;
