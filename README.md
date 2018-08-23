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
