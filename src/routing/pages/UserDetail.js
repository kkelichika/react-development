// Route parameters.
//
// A dynamic segment in a path (like /users/:id) becomes available on
// props.match.params. So visiting /users/2 gives match.params.id === "2".
// This is how detail pages work - one route handles many items.
//
// Note: params are always STRINGS, so I convert to a number to look up.

import React from "react";
import { Link } from "react-router-dom";

const USERS = {
  1: { name: "Ada Lovelace", city: "London" },
  2: { name: "Alan Turing", city: "Manchester" },
  3: { name: "Grace Hopper", city: "New York" },
};

function UserDetail({ match }) {
  // the :id from the URL arrives here as a string
  const id = match.params.id;
  const user = USERS[id];

  if (!user) {
    return (
      <div>
        <p>No user with id {id}.</p>
        <Link to="/users">Back to users</Link>
      </div>
    );
  }

  return (
    <div>
      <h3>{user.name}</h3>
      <p>City: {user.city}</p>
      <p>(url param id = {id})</p>
      <Link to="/users">Back to users</Link>
    </div>
  );
}

export default UserDetail;
