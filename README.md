# react-element-queries

React component designed to let you conditionally render pieces of UI based on
a set of element (media) queries defined by you.

The best thing? It weights ~800 bytes gzipped (1.9KB minified) and its only
dependency is [react-resize-aware](https://github.com/FezVrasta/react-resize-aware)
which weights only 1.2KB gzipped!

## Installation

```
yarn add react-element-queries
# or
npm install --save react-element-queries
```

## Usage

It's super easy to use:

```jsx
import { ElementQuery, Matches } from 'react-element-queries';

const App = () =>
  <ElementQuery queries={{ sm: { maxWidth: 200 }, lg: { minWidth: 201 } }}>
    <Matches sm>I get rendered only when `sm` matches! 🐣</Matches>
    <Matches lg>Instead this is rendered only when `lg` matches 🐷</Matches>
  </ElementQuery>
```

Additionally, you can match multiple element queries to render a piece of UI in
different conditions:

```jsx
<Matches sm lg>🐣 and 🐷</Matches>
```

And if you need some more power, you can invert the behavior of a selector:

```jsx
<Matches sm={false}>I match only when `sm` isn't matching</Matches>
```

### Need more power?

You can enhance your component to provide it a `matches` property you can
use to programmatically check for one or more element queries.  
You simply have to provide a `getRef` property assigned as `ref` callback,
make it render its `children` and use the `matches` property as follows:

```jsx
import { makeElementQuery } from 'react-element-queries';
const App = ({ getRef, children, matches }) =>
  <div ref={getRef} style={{ color: matches('sm') ? 'yellow' : 'pink' }}>
    <Matches sm>🐣</Matches>
    {children}
  </div>

const EnhancedApp = makeElementQuery(
  App,
  { sm: { maxWidth: 200 }, lg: { minWidth: 201 } }
);
```

## Docs

### Queries
The `queries` property is an object with a list of properties of your choice,
you can name them how you prefer, for instance, you could have `sm` or `small` or
`verySmallMatcher`:

- `{ sm: { maxWidth: 10 } }`
- `{ small: { maxWidth: 100, minWidth: 20 } }`
- `{ verySmallMatcher: { maxWidth: 10, minHeight: 30 } }`

Each property contains an object with one or more expressions.

So far, the supported expressions are: `maxWidth`, `minWidth`, `maxHeight` and
`minHeight`.

### `<Matches />` component
Once you have defined your element queries, you can use the `<Matches />` component
to conditionally render a piece of UI.  
Simply add to it one or more element queries names to tell it to display its content
when at least one of the matches the given expressions.

### `matches` property
When you enhance your component with `makeElementQuery`, your component will get
access to the `matches` property.  
This is a function you can call programmatically to perform any kind of operation
with the result of the element queries you provide it.

```js
matches('sm') // true if `sm` is matching
matches('sm', 'lg') // true if `sm` and/or `lg` are matching
matches({ sm: false }) // true when `sm` isn't matching
matches({ sm: false }, 'lg') // true when `sm` doesn't match and `lg` does
```

### `width` and `height` properties
Since React Element Queries is based on React Resize Aware, you have access to
the `width` and `height` properties once you have enhanced a component with
`makeElementQuery`.

```
const Example = makeElementQuery(
  ({ getRef, children, width, height, matches }) =>
    <div ref={getRef}>{children}</div>,
  { sm: { maxWidth: 300 } }
);
```

# Credits

Full credits to the original idea to [@souporserious](https://github.com/souporserious).

# License

MIT License Copyright 2017+, Federico Zivolo