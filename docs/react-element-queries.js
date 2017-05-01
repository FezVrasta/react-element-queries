(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('react-resize-aware')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'react-resize-aware'], factory) :
	(factory((global.ReactElementQueries = global.ReactElementQueries || {}),global.React,global.PropTypes,global.ReactResizeAware));
}(this, (function (exports,react,PropTypes,reactResizeAware) { 'use strict';

PropTypes = 'default' in PropTypes ? PropTypes['default'] : PropTypes;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;
var _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contextTypes = {
  queries: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number
};

var ElementQuery = reactResizeAware.makeResizeAware((_temp = _class = function (_Component) {
  _inherits(ElementQuery, _Component);

  function ElementQuery() {
    _classCallCheck(this, ElementQuery);

    return _possibleConstructorReturn(this, (ElementQuery.__proto__ || Object.getPrototypeOf(ElementQuery)).apply(this, arguments));
  }

  _createClass(ElementQuery, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        queries: this.props.queries,
        width: this.props.width,
        height: this.props.height
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          queries = _props.queries,
          getRef = _props.getRef,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['queries', 'getRef', 'children']);

      return react.createElement('div', _extends({ ref: getRef }, props), children);
    }
  }]);

  return ElementQuery;
}(react.Component), _class.childContextTypes = contextTypes, _temp));

var Matches = function (_Component2) {
  _inherits(Matches, _Component2);

  function Matches() {
    _classCallCheck(this, Matches);

    return _possibleConstructorReturn(this, (Matches.__proto__ || Object.getPrototypeOf(Matches)).apply(this, arguments));
  }

  _createClass(Matches, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _context = this.context,
          queries = _context.queries,
          width = _context.width,
          height = _context.height;

      var results = Object.keys(queries).map(function (key) {
        var query = _extends({}, queries[key]);
        if (query.maxWidth) {
          query.maxWidth = query.maxWidth >= width;
        }
        if (query.minWidth) {
          query.minWidth = query.minWidth <= width;
        }
        if (query.maxHeight) {
          query.maxHeight = query.maxHeight >= height;
        }
        if (query.minHeight) {
          query.minHeight = query.minHeight <= height;
        }
        return {
          key: key,
          matches: !Object.values(query).some(function (value) {
            return value === false;
          })
        };
      });
      var match = results.some(function (_ref) {
        var key = _ref.key,
            matches = _ref.matches;
        return _this3.props[key] !== undefined && matches === _this3.props[key];
      });
      return match ? react.createElement('span', null, this.props.children) : null;
    }
  }]);

  return Matches;
}(react.Component);

Matches.contextTypes = contextTypes;

exports.ElementQuery = ElementQuery;
exports.Matches = Matches;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
