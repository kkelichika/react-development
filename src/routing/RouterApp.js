// react-router: showing different "pages" without reloading the browser.
//
// A single-page app fakes multiple pages by swapping components based on
// the URL. react-router-dom (v4 in 2018) does this:
//   - <BrowserRouter> wraps the whole app and watches the URL
//   - <Link to="..."> is a navigation link (no full page reload)
//   - <Route path="..." component={...}> renders a component when the URL
//     matches that path
//
// "exact" matters: without it, path="/" would match EVERY url (since all
// urls start with "/").

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function RouterApp() {
  return (
    <BrowserRouter>
      <div className="router-app">
        {/* navigation - clicking these changes the URL, no reload */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>

        <hr />

        {/* these render based on the current URL.
            exact so "/" does not also match "/about" */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
