import {createElement, Component} from 'react';
import PropTypes from 'prop-types';
import {makeResizeAware} from 'react-resize-aware';

const contextTypes = {
  queries: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

class ElementQuery extends Component {
  static defaultProps = {
    component: 'div',
  };

  getChildContext() {
    return {
      queries: this.props.queries,
      width: this.props.width,
      height: this.props.height,
    };
  }

  render() {
    const {component, queries, getRef, children, proxy, ...props} = this.props;
    const ref = proxy ? {getRef} : {ref: getRef};
    return createElement(component, {...ref, ...props}, children);
  }

  static childContextTypes = contextTypes;
}

const ResizeAwareElementQuery = makeResizeAware(ElementQuery);

function matches(queries, selectors, width, height) {
  const results = Object.keys(queries).map(key => {
    const query = {...queries[key]};
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
      key,
      matches: !Object.values(query).some(value => value === false),
    };
  });
  return results.some(
    ({key, matches}) =>
      selectors[key] !== undefined && matches === selectors[key]
  );
}

class Matches extends Component {
  render() {
    const {queries, width, height} = this.context;
    const match = matches(queries, this.props, width, height);
    return match ? createElement('span', null, this.props.children) : null;
  }

  static contextTypes = contextTypes;
}

function makeElementQuery(component, queries) {
  function Enhanced({getRef, width, height, ...props}) {
    return createElement(ElementQuery, {
      component,
      proxy: true,
      getRef,
      queries,
      width,
      height,
      matches: (...selectors) => {
        const parsedSelectors = {};
        selectors.forEach(arg => {
          if (typeof arg === 'object') {
            Object.keys(arg).forEach(key => {
              parsedSelectors[key] = arg[key];
            });
          } else {
            parsedSelectors[arg] = true;
          }
        });
        console.log(parsedSelectors);
        return matches(queries, parsedSelectors, width, height);
      },
      ...props,
    });
  }

  return makeResizeAware(Enhanced);
}

export {ResizeAwareElementQuery as ElementQuery, Matches, makeElementQuery};
