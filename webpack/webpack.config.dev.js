const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js'
  },
  devServer: {
    compress: true,
    inline: true
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: false, importLoaders: 1, sourceMap: true }},
          { loader: 'postcss-loader', options: { ident: 'postcss', sourceMap: true }},
          { loader: 'sass-loader', options: { sourceMap: true } },
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: false, importLoaders: 1, sourceMap: true }},
          { loader: 'postcss-loader', options: { ident: 'postcss', sourceMap: true }},
        ]
      },
    ]
  }
});
