# react-element-queries

React component designed to let you conditionally render pieces of UI based on
a set of element (media) queries defined by you.

The best thing? It weights 600 bytes gzipped (1.3KB minified) and its only
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

## Docs

The `queries` property is an object with a list of properties of your choice,
you can name them how you prefer, for instance, you could have `sm` or `small` or
`verySmallMatcher`.  
Each property contains an object with one or more expressions..

So far, the supported expressions are: `maxWidth`, `minWidth`, `maxHeight` and
`minHeight`.

Once you have defined your element queries, you can use the `<Matches />` component
to conditionally render a piece of UI.  
Simply add to it one or more element queries names to tell it to display its content
when at least one of the matches the given expressions.


# Credits

Full credits to the original idea to [@souporserious](https://github.com/souporserious).

# License

MIT License Copyright 2017+, Federico Zivolo