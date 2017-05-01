# react-element-queries

React component designed to let you conditionally render pieces of UI based on
a set of element (media) queries defined by you.

The best thing? It weights 600 bytes gzipped (1.3KB minified) and its only
dependency is [react-resize-aware](https://github.com/FezVrasta/react-resize-aware)
which weights only 1.2KB gzipped!

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

# Credits

Full credits to the original idea to [@souporserious](https://github.com/souporserious).

# License

MIT License Copyright 2017+, Federico Zivolo