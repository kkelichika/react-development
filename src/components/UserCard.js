// Props: passing data into a component.
//
// Props are how a parent gives data to a child component. You pass them
// like HTML attributes (<UserCard name="Ada" />) and read them from the
// props argument. Props are READ-ONLY - a component must never change its
// own props.

import React from "react";

// I destructure the props right in the parameter list (an old habit from
// my JavaScript months).
function UserCard({ name, role, age }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Role: {role}</p>
      {/* a prop with a default if none was passed */}
      <p>Age: {age != null ? age : "unknown"}</p>
    </div>
  );
}

export default UserCard;
