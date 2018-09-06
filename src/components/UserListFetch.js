// Fetching data in componentDidMount.
//
// The standard 2018 pattern for loading data: kick off the request in
// componentDidMount, and put the results into state when it resolves. The
// component renders once empty, then re-renders with the data.
//
// (This uses my mock API, but the shape is identical to using fetch.)

import React from "react";
import { fetchUsers } from "../api/mockApi";

class UserListFetch extends React.Component {
  state = { users: [] };

  componentDidMount() {
    // start the request as soon as the component is on screen
    fetchUsers().then((users) => {
      // when it resolves, store the data -> triggers a re-render
      this.setState({ users });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="user-list-fetch">
        <h2>Users (fetched on mount)</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} — {user.city}
            </li>
          ))}
        </ul>
        {users.length === 0 && <p>(no data yet)</p>}
      </div>
    );
  }
}

export default UserListFetch;
