// The root component. It pulls in the small example components I build as
// I learn, so I can see them on the page.

import React from "react";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <Greeting />

      {/* Card wraps whatever I nest inside it (its children) */}
      <Card title="A wrapped user">
        <UserCard name="Ada" role="admin" age={36} />
      </Card>

      <Card title="Some text">
        <p>Anything can go inside a Card - text, other components, lists...</p>
      </Card>
    </div>
  );
}

export default App;
