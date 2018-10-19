// Action types and action creators.
//
// Two tidy-up conventions that make Redux apps easier to maintain:
//   - action TYPES as constants, so a typo throws instead of silently
//     doing nothing (a typo'd string just hits the reducer's default case).
//   - action CREATORS: small functions that build action objects, so the
//     shape lives in one place and components do not write raw objects.

// action type constants
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const RESET = "RESET";

// action creators - they just return action objects
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const add = (amount) => ({ type: ADD, amount });
export const reset = () => ({ type: RESET });
