import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  moduleName: 'ReactElementQueries',
  format: 'umd',
  sourceMap: true,
  exports: 'named',
  external: ['react', 'prop-types', 'react-resize-aware'],
  globals: {
    react: 'React',
    'prop-types': 'PropTypes',
    'react-resize-aware': 'ReactResizeAware',
  },
  plugins: [
    babel({
      babelrc: false,
      presets: [['es2015', {modules: false}], 'stage-2'],
    }),
  ],
};
