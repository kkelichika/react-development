// A list page that links to detail pages using route params.

import React from "react";
import { Link } from "react-router-dom";

const USERS = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Alan Turing" },
  { id: 3, name: "Grace Hopper" },
];

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {USERS.map((u) => (
          <li key={u.id}>
            {/* each link goes to a parameterised route /users/:id */}
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
