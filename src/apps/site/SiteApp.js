// A small multi-page site combining react-router + the theme context.
//
// - the theme lives in Context, so any page can read/toggle it
// - react-router swaps pages based on the URL
// - the layout (header + nav) stays put while only the page content changes
//
// This is the shape of a real small app: a shell with navigation, themed,
// with several routed pages.

import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import ThemeContext, { ThemeProvider } from "../../context/ThemeContext";

function Page({ title, children }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const styles =
          theme === "dark"
            ? { background: "#222", color: "#eee" }
            : { background: "#fff", color: "#222" };
        return (
          <div style={{ ...styles, padding: 16, minHeight: 120 }}>
            <h2>{title}</h2>
            {children}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

const HomePage = () => <Page title="Home">A themed, routed home page.</Page>;
const DocsPage = () => <Page title="Docs">Some documentation would go here.</Page>;
const AboutPage = () => <Page title="About">Built while learning React.</Page>;

function Header() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <header style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <strong>My Site</strong>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/docs">Docs</NavLink>
          <NavLink to="/about">About</NavLink>
          <button onClick={toggleTheme} style={{ marginLeft: "auto" }}>
            {theme === "light" ? "Dark" : "Light"} mode
          </button>
        </header>
      )}
    </ThemeContext.Consumer>
  );
}

function SiteApp() {
  return (
    // ThemeProvider on the outside so every page + the header share it
    <ThemeProvider>
      <BrowserRouter>
        <div className="site-app">
          <Header />
          <hr />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/docs" component={DocsPage} />
            <Route path="/about" component={AboutPage} />
            <Route render={() => <Page title="404">Not found.</Page>} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default SiteApp;
