// A plain presentational component that just renders a list of people.
// It knows nothing about loading - that concern is added by a HOC.

import React from "react";

function PeopleList({ people }) {
  return (
    <ul>
      {people.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

export default PeopleList;
