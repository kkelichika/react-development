// Refs: reaching a real DOM node directly.
//
// Usually React controls the DOM for me and I never touch it. But sometimes
// I need direct access to a real element - to focus an input, measure its
// size, or play a media element. That is what a "ref" is for.
//
// The 2018 way: React.createRef() in the constructor, attach it with
// ref={this.myRef}, then use this.myRef.current to get the DOM node.
//
// Rule of thumb: prefer state/props; use refs only for things React's
// declarative model cannot do (like .focus()).

import React from "react";

class FocusInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // create the ref
    this.state = { text: "" };
  }

  componentDidMount() {
    // focus the input as soon as the component appears
    this.inputRef.current.focus();
  }

  focusInput = () => {
    // .current is the actual <input> DOM element
    this.inputRef.current.focus();
  };

  clearAndFocus = () => {
    this.setState({ text: "" });
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div className="focus-input">
        <h2>Refs (focusing an input)</h2>
        <input
          ref={this.inputRef}
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
          placeholder="Auto-focused on mount"
        />
        <button onClick={this.focusInput}>Focus</button>
        <button onClick={this.clearAndFocus}>Clear & focus</button>
      </div>
    );
  }
}

export default FocusInput;
