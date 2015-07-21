var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var embedFileSize = 65536;
var assetsLoaders = [
  {test: /\.css$/, loader: 'style!css?sourceMap'},
  {test: /\.json$/, loader: 'json'},
  {test: /\.mp4$/, loader: 'url?limit=' + embedFileSize + '&mimetype=video/mp4'},
  {test: /\.svg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'},
  {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
  {test: /\.jpg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
  {test: /\.gif$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
  {
    test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url?limit=' + embedFileSize
  }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './js/main.js'
  ],
  output:  {
    path: __dirname,
    filename: './dist/main.js',
    publicPath: "http://localhost:8080/"
  },
  module: {
    loaders: assetsLoaders.concat([
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|Vendor)/,
        include: path.join(__dirname, 'js'),
        loaders: ['react-hot', 'babel?optional[]=runtime']
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          'less?sourceMap'
        )
      },
    ]),
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|Vendor)/,
        loader: "eslint-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('./dist/app.css')
  ],
  stats: { colors: true },
  devServer: {
    stats: {
      chunkModules: false,
      colors: true
    },
    hot: true,
    proxy: {
      // '/v1/*': 'http://localhost:24957',
      // '/images/*': 'http://localhost:24957',
      // '/fonts/*': 'http://localhost:24957'
    }
  },
  eslint: {configFile: '.eslintrc'}
};
