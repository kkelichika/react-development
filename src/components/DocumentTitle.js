// componentDidUpdate.
//
// componentDidUpdate(prevProps, prevState) runs after EVERY re-render
// except the first. It is where you react to a change - for example doing
// something when a particular prop or state value changed.
//
// The most important rule: if you call setState here, you MUST wrap it in
// a condition comparing prev vs current values, or you create an infinite
// loop (update -> didUpdate -> setState -> update -> ...).
//
// This demo updates the browser tab title whenever the count changes, and
// counts how many times it updated.

import React from "react";

class DocumentTitle extends React.Component {
  state = { count: 0, updateCount: 0 };

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
    // only act when the count actually changed (avoids infinite loops)
    if (prevState.count !== this.state.count) {
      document.title = `Count: ${this.state.count}`;
      // safe setState because it is guarded by the condition above
      this.setState((prev) => ({ updateCount: prev.updateCount + 1 }));
    }
  }

  render() {
    return (
      <div className="document-title">
        <h2>componentDidUpdate</h2>
        <p>Count: {this.state.count} (look at the browser tab title!)</p>
        <p>Times the title updated: {this.state.updateCount}</p>
        <button onClick={() => this.setState((p) => ({ count: p.count + 1 }))}>
          Increment
        </button>
      </div>
    );
  }
}

export default DocumentTitle;
