'use strict';

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

const MyComponent = ReactElementQueries.makeElementQuery(
  function MyComponent(_ref) {
    var getRef = _ref.getRef,
      children = _ref.children,
      matches = _ref.matches,
      props = _objectWithoutProperties(_ref, ['getRef', 'children', 'matches']);

    return React.createElement(
      'div',
      _extends({className: 'example', ref: getRef}, props),
      React.createElement(
        'p',
        null,
        "Hover me! I'm based on",
        React.createElement(
          'a',
          {href: 'https://github.com/FezVrasta/react-resize-aware'},
          'react-resize-aware'
        ),
        'and let you render pieces of UI based on your own element queries!'
      ),
      React.createElement(
        ReactElementQueries.Matches,
        {sm: true},
        'small 🐣 (pio?)'
      ),
      React.createElement(
        ReactElementQueries.Matches,
        {lg: true},
        'large 🐷 (oink!)'
      ),
      React.createElement('input', {
        className: matches('sm') ? 'sm' : null,
        placeholder: "I'm yellow when 🐣 is visible",
        style: {width: 200, display: 'block'},
      }),
      children
    );
  },
  {
    sm: {maxHeight: 150},
    lg: {minHeight: 151},
  }
);

function App() {
  return React.createElement(MyComponent);
}

ReactDOM.render(
  React.createElement(App, null),
  document.querySelector('#root')
);
