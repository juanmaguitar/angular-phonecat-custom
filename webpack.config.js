  'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

module.exports = (function makeWebpackConfig () {
  var config = {};

  config.entry = {
    app: './src/app/app.js'
  };

  config.output = {
    path: path.resolve(__dirname, './dist'),
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  if (isProd) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  config.resolve = {
    modulesDirectories: [
      'node_modules',
      'src/views'
    ]
  };

  config.module = {
    preLoaders: [],
    loaders: [
      // Javascript loaders
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel'],
        exclude: /node_modules/
      },
      // CSS/SASS loaders
      {
        test: /\.(css|scss)$/,
        loaders: ['style', 'css', 'sass']
      },
      // Images loaders
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      // HTML loaders
      { test: /\.html$/, loader: 'raw', exclude: /node_modules/ }
    // {
    //   test: /\.html$/,
    //   loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html',
    //   exclude: /index\.html/
    // }
    ]
  };

  config.plugins = [];

  config.plugins.push(
    new HtmlWebpackPlugin({
      title: 'phoneCat App',
      hash: true,
      template: './src/_public/index.html',
      inject: 'body'
    })
  );

  if (isProd) {
    config.plugins.push(
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new CopyWebpackPlugin( [
          { from: path.resolve(__dirname, './src/views') },
          { from: path.resolve(__dirname, './src/_public/data'), to: 'data' },
          { from: path.resolve(__dirname, './src/_public/img'), to: 'img' }
        ],
        { ignore: ['*.html'] }
      )
    );
  }

  config.devServer = {
    contentBase: './src/_public',
    stats: 'minimal'
  };

  return config;
}());

