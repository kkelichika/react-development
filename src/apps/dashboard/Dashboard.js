// A small data dashboard - a capstone tying September together.
//
// It loads users and posts in PARALLEL on mount (Promise.all, from my JS
// async month), shows loading/error states, computes some stats, lets you
// select a user to see their posts (re-fetch on prop change via the child),
// and has a refresh button. Several presentational components plus one
// stateful container.

import React from "react";
import { fetchUsers, fetchPostsByUser } from "../../api/mockApi";
import StatCard from "./StatCard";

// presentational: posts for the selected user (re-fetches on prop change)
class UserPosts extends React.Component {
  state = { posts: [], loading: true };

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) this.load();
  }
  load() {
    this.setState({ loading: true });
    fetchPostsByUser(this.props.userId).then((posts) =>
      this.setState({ posts, loading: false })
    );
  }
  render() {
    const { posts, loading } = this.state;
    if (loading) return <p>Loading posts…</p>;
    if (posts.length === 0) return <p>No posts for this user.</p>;
    return (
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    );
  }
}

class Dashboard extends React.Component {
  state = {
    users: [],
    loading: true,
    error: null,
    selectedUserId: null,
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    this.setState({ loading: true, error: null });
    // load everything we need together
    Promise.all([fetchUsers()])
      .then(([users]) =>
        this.setState({
          users,
          loading: false,
          selectedUserId: users[0] ? users[0].id : null,
        })
      )
      .catch((err) => this.setState({ error: err.message, loading: false }));
  };

  render() {
    const { users, loading, error, selectedUserId } = this.state;
    if (loading) return <p>Loading dashboard…</p>;
    if (error) return <p style={{ color: "crimson" }}>{error}</p>;

    // derived stats
    const cities = new Set(users.map((u) => u.city));

    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <button onClick={this.loadUsers}>Refresh</button>

        <div className="stats">
          <StatCard label="Users" value={users.length} />
          <StatCard label="Cities" value={cities.size} />
        </div>

        <h3>Pick a user</h3>
        <div>
          {users.map((u) => (
            <button
              key={u.id}
              onClick={() => this.setState({ selectedUserId: u.id })}
              style={{ fontWeight: selectedUserId === u.id ? "bold" : "normal" }}
            >
              {u.name}
            </button>
          ))}
        </div>

        <h3>Posts</h3>
        {selectedUserId && <UserPosts userId={selectedUserId} />}
      </div>
    );
  }
}

export default Dashboard;
