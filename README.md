# react-development

Learning React from scratch, building up one small concept at a time. This
follows on from my JavaScript work - now I want to build real user interfaces.

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Goal

Understand React step by step: components, props, state, lifecycle, forms and
small apps.

## How to run

```
npm install
npm start
```

Then open http://localhost:3000.

## What I have learned so far (August)

- Components (function and class) and JSX.
- Passing data with props, and composition with `props.children`.
- Rendering lists with map() and keys, and conditional rendering.
- State in class components, and updating it correctly with setState.
- Handling events and the `this`-binding gotchas.
- Controlled form inputs, and lifting state up to share data.
- Styling with CSS files, className props and inline styles.
- Building small apps (a counter and a to-do app).

## Progress

- Project scaffolded with create-react-app; first `App` component renders a
  greeting.
- `src/components/JsxBasics.js` - JSX syntax: expressions in `{ }`, className, inline styles.
- `src/components/Greeting.js` - my first reusable function component.
- `src/components/UserCard.js` - passing data into a component with props.
- `src/components/Card.js` - composition with `props.children` (a generic wrapper).
- `src/components/UserList.js` - rendering a list with map() and the key prop.
- `src/components/LoginStatus.js` - conditional rendering (ternary, &&, returning null).
- `src/components/Clock.js` - a class component with state (`this.state` in the constructor).
- `src/components/ClickBox.js` - handling events (onClick/onMouseEnter) and binding `this`.
- `src/components/Counter.js` - updating state with setState (and the functional form).
- `src/components/SignupForm.js` - controlled form inputs (one handler for many fields).
- `src/components/Temperature.js` - lifting state up so two inputs stay in sync.
- `src/components/Badge.js` + `Badge.css` - styling with imported CSS, className props and inline styles.
- `src/apps/StepCounter.js` - a small counter app combining state, events, a controlled input and a child component.
- `src/apps/todo/` - a To-Do app: state, controlled input, immutable updates, lists/keys, filtering.
- `src/components/TickingClock.js` - lifecycle: starting a timer in componentDidMount.
- `src/components/MountToggle.js` - componentWillUnmount cleanup (mount/unmount a child).
- `src/components/DocumentTitle.js` - componentDidUpdate reacting to a changed value (no infinite loops).
- `src/api/mockApi.js` + `src/components/UserListFetch.js` - fetching data in componentDidMount.
- `src/components/UsersWithStatus.js` - tracking loading, error and success states.
- `src/components/UserPosts.js` - re-fetching when a prop changes (master/detail).
