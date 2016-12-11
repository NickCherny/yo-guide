const path = require('path');
const env = process.env.NODE_ENV || 'develop';
const dist = './public/dist';

var base = {
  entry: {
    main: path.resolve(__dirname, './app/client/src/index')
  },
  output: {
    path: path.resolve(__dirname, dist),
    filename: '[name].js',
    publicPath: './public'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'app']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }]
  },
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js','.jsx'],
  },
  target: 'web'
}

module.exports = base;
