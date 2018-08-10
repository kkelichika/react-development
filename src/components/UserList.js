// Rendering lists with map() and keys.
//
// To show a list, I map an array of data to an array of JSX elements -
// exactly the map() I used all the time in plain JavaScript.
//
// Each element in a list needs a unique "key" prop. React uses keys to
// track which items changed/added/removed efficiently. Use a stable id,
// NOT the array index if the list can reorder.

import React from "react";
import UserCard from "./UserCard";

function UserList({ users }) {
  if (users.length === 0) {
    return <p>No users yet.</p>;
  }

  return (
    <div className="user-list">
      <h2>Users ({users.length})</h2>
      {users.map((user) => (
        // key should be a stable unique id, here the user's id
        <UserCard key={user.id} name={user.name} role={user.role} age={user.age} />
      ))}
    </div>
  );
}

export default UserList;
