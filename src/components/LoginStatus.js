// Conditional rendering.
//
// "Show this only when..." is everywhere in UI. In React there is no
// special if-syntax inside JSX - I just use normal JavaScript expressions:
//   - a ternary:  condition ? <A /> : <B />
//   - the && trick: condition && <Thing />   (renders Thing only if true)
//   - or an early return / a variable built with if statements
//
// Gotcha: with &&, a falsy number like 0 would actually render "0", so I
// make sure the left side is a real boolean.

import React from "react";

function LoginStatus({ user, messageCount }) {
  return (
    <div className="login-status">
      {/* ternary: one thing OR another */}
      {user ? (
        <p>Welcome back, {user.name}!</p>
      ) : (
        <p>Please log in.</p>
      )}

      {/* && : render the badge ONLY when there are messages */}
      {messageCount > 0 && <p className="badge">You have {messageCount} messages</p>}

      {/* building the element with a variable + if, for more complex cases */}
      {renderRole(user)}
    </div>
  );
}

function renderRole(user) {
  if (!user) return null; // returning null renders nothing
  if (user.role === "admin") return <p>(You have admin powers)</p>;
  return <p>(Standard account)</p>;
}

export default LoginStatus;
