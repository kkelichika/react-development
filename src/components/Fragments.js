// Fragments.
//
// A component must return ONE root element. Often I wrapped things in a
// <div> just to satisfy that rule, which added useless extra nodes to the
// page. A Fragment lets me group children WITHOUT adding a real DOM
// element. React.Fragment is the full form; <>...</> is the short syntax
// (newer in 2018).
//
// Fragments are especially important inside tables, where an extra <div>
// between <tr> and <td> would be invalid HTML.

import React from "react";

// returns two <td>s without a wrapper div - so it works inside a <tr>
function Columns({ user }) {
  return (
    <React.Fragment>
      <td>{user.name}</td>
      <td>{user.city}</td>
    </React.Fragment>
  );
}

function Fragments() {
  const users = [
    { id: 1, name: "Ada", city: "London" },
    { id: 2, name: "Grace", city: "New York" },
  ];

  return (
    // the short <>...</> syntax: a fragment with no extra wrapper element
    <>
      <h2>Fragments</h2>
      <table>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {/* Columns adds two <td>s with no wrapping div - valid table */}
              <Columns user={user} />
            </tr>
          ))}
        </tbody>
      </table>
      <p>The table rows have no stray wrapper divs, thanks to fragments.</p>
    </>
  );
}

export default Fragments;
