// Switch and a 404 catch-all route.
//
// Without <Switch>, react-router renders EVERY <Route> that matches the
// URL. <Switch> renders only the FIRST match, like a switch statement.
// That lets me add a catch-all <Route> (no path) at the END to show a 404
// page when nothing else matched.

import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function RouterApp() {
  return (
    <BrowserRouter>
      <div className="router-app">
        <nav style={{ display: "flex", gap: 12 }}>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/nope">Broken link</NavLink>
        </nav>
        <hr />

        {/* Switch renders only the first matching route */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={UserDetail} />
          <Route path="/about" component={About} />
          {/* no path = matches anything, so it must be LAST = a 404 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
