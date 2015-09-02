var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var data = require('./src/data');

module.exports = {

  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'eval',

  // http://gaearon.github.io/react-hot-loader/getstarted/
  entry: [
    './src/app',
    './src/index.html',
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },

  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }), // extracts css
    new webpack.HotModuleReplacementPlugin(), // hot-mode
    new webpack.NoErrorsPlugin() // https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
  ],

  // resolve paths: http://webpack.github.io/docs/resolving.html
  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },

  module: {
    loaders: [{
      test: /\.html?$/,
      loaders: ['html-loader', 'file-loader?name=[name].[ext]']
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader']
    },
    {
      test: /\.json?$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!cssnext-loader')
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
    },
    {
      test: /\.txt$/,
      loader: 'file-loader?name=[name].[ext]'
    }],
    preLoaders: [{
      test: /\.js$/,
      loaders: ['eslint'],
      include: [new RegExp(path.join(__dirname, 'src'))]
    }]
  },

  postcss: [
    require('autoprefixer-core')
  ],

  // http://eslint.org/index.html
  // https://github.com/yannickcr/eslint-plugin-react
  eslint: {
    configFile: '.eslintrc'
  }
};
