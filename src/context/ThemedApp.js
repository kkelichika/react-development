// Components that consume the theme context. A button anywhere can toggle
// the theme, and the whole UI reacts - without passing any theme props.

import React from "react";
import ThemeContext, { ThemeProvider } from "./ThemeContext";

// a button that toggles the theme, reading the updater from context
function ThemeToggleButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light"}</button>
      )}
    </ThemeContext.Consumer>
  );
}

// a panel that styles itself based on the current theme
function Panel({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const styles =
          theme === "dark"
            ? { background: "#222", color: "#eee" }
            : { background: "#fafafa", color: "#222" };
        return <div style={{ ...styles, padding: 16, borderRadius: 6 }}>{children}</div>;
      }}
    </ThemeContext.Consumer>
  );
}

function ThemedApp() {
  return (
    // one Provider wraps everything that should share the theme
    <ThemeProvider>
      <div className="themed-app">
        <h2>Theme Context</h2>
        <ThemeToggleButton />
        <Panel>
          <p>This panel re-styles itself when the theme changes.</p>
          <ThemeToggleButton />
        </Panel>
      </div>
    </ThemeProvider>
  );
}

export default ThemedApp;
