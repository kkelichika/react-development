// The root component. It pulls in the small example components I build as
// I learn, so I can see them on the page.

import React from "react";
import Greeting from "./components/Greeting";
import UserList from "./components/UserList";
import LoginStatus from "./components/LoginStatus";

const users = [
  { id: 1, name: "Ada", role: "admin", age: 36 },
  { id: 2, name: "Bob", role: "editor", age: 41 },
];

function App() {
  return (
    <div>
      <h1>Learning React</h1>
      <Greeting />

      {/* try changing these props to see the conditional rendering react */}
      <LoginStatus user={{ name: "Ada", role: "admin" }} messageCount={3} />
      <LoginStatus user={null} messageCount={0} />

      <UserList users={users} />
    </div>
  );
}

export default App;
