// A practical context: an app-wide theme that any component can read AND
// toggle. The trick: the context value is an OBJECT holding both the data
// (theme) and a function to change it (toggleTheme). A top-level provider
// component owns the state and supplies that object.

import React from "react";

// default shape so consumers know what to expect
const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

// a provider component that owns the theme state
export class ThemeProvider extends React.Component {
  // arrow method so `this` is bound; passed down via context
  toggleTheme = () => {
    this.setState((prev) => ({
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  // putting toggleTheme in state means the context value is stable-ish and
  // includes both the value and the updater
  state = {
    theme: "light",
    toggleTheme: this.toggleTheme,
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;
