// Loading and error states.
//
// Real data fetching has three outcomes: still loading, succeeded, or
// failed. A good component tracks all three so the user always sees
// something sensible (a spinner, the data, or an error message) instead
// of a blank screen.
//
// The common pattern: keep loading / error / data in state, and render
// based on which one is current.

import React from "react";
import { fetchUsers, fetchUsersFailing } from "../api/mockApi";

class UsersWithStatus extends React.Component {
  state = {
    users: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.load(false);
  }

  load = (shouldFail) => {
    // reset to the loading state before each attempt
    this.setState({ loading: true, error: null });

    const request = shouldFail ? fetchUsersFailing() : fetchUsers();
    request
      .then((users) => this.setState({ users, loading: false }))
      .catch((error) => this.setState({ error: error.message, loading: false }));
  };

  render() {
    const { users, loading, error } = this.state;

    return (
      <div className="users-status">
        <h2>Users (with loading & error states)</h2>

        <button onClick={() => this.load(false)}>Load (success)</button>
        <button onClick={() => this.load(true)}>Load (force error)</button>

        {/* render based on which state we are in */}
        {loading && <p>Loading…</p>}
        {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
        {!loading && !error && (
          <ul>
            {users.map((u) => (
              <li key={u.id}>{u.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default UsersWithStatus;
