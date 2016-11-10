const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: path.join(__dirname, 'client', 'index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: "/public/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      include: path.join(__dirname, 'client'),
      test: /\.(jsx|js)(\?.*)?$/,
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: debug ? ['react', 'es2015', 'stage-1'] : ['react', 'es2015', 'stage-1'],
        plugins: ['transform-decorators-legacy', 'transform-strict-mode']
      }
    }]
  },
  resolve: {
    root: path.join(__dirname, "client"),
    extensions: ['', '.js', '.jsx']
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
  ]
};
