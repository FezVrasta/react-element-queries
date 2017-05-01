import {createElement, Component} from 'react';
import PropTypes from 'prop-types';
import {makeResizeAware} from 'react-resize-aware';

const contextTypes = {
  queries: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

const ElementQuery = makeResizeAware(
  class ElementQuery extends Component {
    getChildContext() {
      return {
        queries: this.props.queries,
        width: this.props.width,
        height: this.props.height,
      };
    }

    render() {
      const {queries, getRef, children, ...props} = this.props;
      return createElement('div', {ref: getRef, ...props}, children);
    }

    static childContextTypes = contextTypes;
  }
);

class Matches extends Component {
  render() {
    const {queries, width, height} = this.context;
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
    const match = results.some(
      ({key, matches}) =>
        this.props[key] !== undefined && matches === this.props[key]
    );
    return match ? createElement('span', null, this.props.children) : null;
  }

  static contextTypes = contextTypes;
}

export {ElementQuery, Matches};
