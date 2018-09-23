// A Higher-Order Component (HOC).
//
// A HOC is a FUNCTION that takes a component and returns a NEW component
// with extra behaviour. It is React's way of reusing logic across many
// components - the same "function that returns a function/component" idea
// from my JavaScript higher-order-functions month, applied to UI.
//
// withLoading wraps any component so it shows "Loading…" while an
// isLoading prop is true, otherwise it renders the wrapped component.

import React from "react";

function withLoading(WrappedComponent) {
  // return a NEW component
  return class WithLoading extends React.Component {
    render() {
      const { isLoading, ...rest } = this.props;
      if (isLoading) {
        return <p>Loading…</p>;
      }
      // pass the remaining props straight through to the wrapped component
      return <WrappedComponent {...rest} />;
    }
  };
}

export default withLoading;
