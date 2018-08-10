// The root component. It pulls in the small example components I build as
// I learn, so I can see them on the page.

import React from "react";
import Greeting from "./components/Greeting";
import UserList from "./components/UserList";

// some sample data with stable ids (good for keys)
const users = [
  { id: 1, name: "Ada", role: "admin", age: 36 },
  { id: 2, name: "Bob", role: "editor", age: 41 },
  { id: 3, name: "Cara", role: "viewer", age: 29 },
];

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <Greeting />
      <UserList users={users} />
    </div>
  );
}

export default App;
