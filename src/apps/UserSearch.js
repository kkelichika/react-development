// A search/filter app, combining the month's data + form skills:
//   - fetch a list on mount, with loading/error states
//   - a controlled search box
//   - filtering the list as you type (derived from state, not stored twice)
//   - empty state when nothing matches

import React from "react";
import { fetchUsers } from "../api/mockApi";

class UserSearch extends React.Component {
  state = {
    users: [],
    query: "",
    loading: true,
    error: null,
  };

  componentDidMount() {
    fetchUsers()
      .then((users) => this.setState({ users, loading: false }))
      .catch((err) => this.setState({ error: err.message, loading: false }));
  }

  handleSearch = (e) => this.setState({ query: e.target.value });

  // the filtered list is DERIVED from users + query - I do not keep a
  // separate "filteredUsers" in state (that would be a second source of
  // truth that could get out of sync).
  get filteredUsers() {
    const q = this.state.query.trim().toLowerCase();
    if (!q) return this.state.users;
    return this.state.users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.city.toLowerCase().includes(q)
    );
  }

  render() {
    const { query, loading, error } = this.state;
    if (loading) return <p>Loading users…</p>;
    if (error) return <p style={{ color: "crimson" }}>{error}</p>;

    const results = this.filteredUsers;

    return (
      <div className="user-search">
        <h2>User Search</h2>
        <input
          value={query}
          onChange={this.handleSearch}
          placeholder="Search by name or city"
        />
        <p>{results.length} result(s)</p>

        {results.length === 0 ? (
          <p>No users match "{query}".</p>
        ) : (
          <ul>
            {results.map((u) => (
              <li key={u.id}>
                {u.name} — {u.city}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default UserSearch;
