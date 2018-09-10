// Re-fetching when a prop changes (a master/detail pattern).
//
// A child component that loads data for a given userId needs to RE-FETCH
// when that userId prop changes. So I fetch in componentDidMount (first
// load) AND in componentDidUpdate (when the prop changed). This is a very
// common real-world need that ties the lifecycle methods together.

import React from "react";
import { fetchPostsByUser } from "../api/mockApi";

class UserPosts extends React.Component {
  state = { posts: [], loading: true };

  componentDidMount() {
    this.loadPosts(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    // only re-fetch if the userId prop actually changed
    if (prevProps.userId !== this.props.userId) {
      this.loadPosts(this.props.userId);
    }
  }

  loadPosts(userId) {
    this.setState({ loading: true });
    fetchPostsByUser(userId).then((posts) =>
      this.setState({ posts, loading: false })
    );
  }

  render() {
    const { posts, loading } = this.state;
    if (loading) return <p>Loading posts…</p>;
    if (posts.length === 0) return <p>This user has no posts.</p>;
    return (
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    );
  }
}

// the parent: picking a user changes the userId prop, which makes
// UserPosts re-fetch via componentDidUpdate.
class UserPostsExplorer extends React.Component {
  state = { selectedUserId: 1 };

  render() {
    const { selectedUserId } = this.state;
    return (
      <div className="user-posts">
        <h2>User Posts (re-fetch on prop change)</h2>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => this.setState({ selectedUserId: id })}
            style={{ fontWeight: selectedUserId === id ? "bold" : "normal" }}
          >
            User {id}
          </button>
        ))}
        <UserPosts userId={selectedUserId} />
      </div>
    );
  }
}

export default UserPostsExplorer;
