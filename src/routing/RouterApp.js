// Full routing demo: nav, params, Switch, 404, and a login that
// navigates programmatically / redirects.

import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function RouterApp() {
  return (
    <BrowserRouter>
      <div className="router-app">
        <nav style={{ display: "flex", gap: 12 }}>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={UserDetail} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
