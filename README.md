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
