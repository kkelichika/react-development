// react-router with route parameters for detail pages.

import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

function RouterApp() {
  return (
    <BrowserRouter>
      <div className="router-app">
        <nav style={{ display: "flex", gap: 12 }}>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
        <hr />

        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        {/* :id is a route parameter, available as match.params.id */}
        <Route path="/users/:id" component={UserDetail} />
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
