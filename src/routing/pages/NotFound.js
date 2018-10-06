import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>404 - Page not found</h2>
      <p>That page does not exist.</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default NotFound;
