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

## What I have learned so far

### August - the basics

- Components (function and class) and JSX.
- Passing data with props, and composition with `props.children`.
- Rendering lists with map() and keys, and conditional rendering.
- State in class components, and updating it correctly with setState.
- Handling events and the `this`-binding gotchas.
- Controlled form inputs, and lifting state up to share data.
- Styling with CSS files, className props and inline styles.
- Building small apps (a counter and a to-do app).

### September - lifecycle, data and patterns

- Lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount.
- Fetching data on mount, with loading and error states, and re-fetching on prop change.
- More forms: select/radio/textarea, and validation with touched fields.
- Child-to-parent communication with callback props.
- defaultProps and PropTypes; Fragments; refs with createRef.
- Reusing logic with a higher-order component.
- Building data-driven apps (a search/filter and a dashboard).

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
- `src/components/OrderForm.js` - controlled select, radio, textarea and number inputs.
- `src/components/ValidatedForm.js` - form validation with touched fields and error messages.
- `src/components/Cart.js` - child-to-parent communication via callback props.
- `src/components/Button.js` - defaultProps and PropTypes for safer, self-documenting props.
- `src/components/Fragments.js` - grouping elements without extra DOM nodes (React.Fragment, `<>`).
- `src/components/FocusInput.js` - refs with React.createRef() to focus a DOM input.
- `src/hoc/withLoading.js` + `src/components/PeopleList.js` - a higher-order component for reusing logic.
- `src/apps/UserSearch.js` - a search/filter app: fetch on mount + controlled search + derived results.
- `src/apps/dashboard/` - a data dashboard: parallel loading, stats, user selection, re-fetch on change.
- `src/routing/RouterApp.js` - react-router basics: BrowserRouter, Route and Link.
- `src/routing/Navbar.js` - a navbar with NavLink that highlights the active route.
- `src/routing/pages/Users.js` + `UserDetail.js` - route params (`/users/:id` via match.params).
- `src/routing/pages/NotFound.js` - Switch and a catch-all 404 route.
- `src/routing/pages/Login.js` - programmatic navigation (history.push) and `<Redirect>`.
- `src/context/ContextDemo.js` - Context API: Provider/Consumer to avoid prop drilling.
- `src/context/ContextTypeDemo.js` - reading context in a class via static contextType.
- `src/context/ThemedApp.js` - a practical theme context with a value + updater (toggle the theme anywhere).
