var path = require('path');

module.exports = {
  resolveLoader: {
    alias: {
      "storage-loader": path.join(__dirname, "./src/StorageLoader")
    }
  },
  entry: './src/Geo.js',
  output: {
    path: './build',
    filename: './smart-geo.js',
    libraryTarget: "amd"
  },
  module: {
    exprContextCritical: false,
    preLoaders: [
      {
        include: /Storage\.js$/,
        loader: 'storage-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=0'
      },
      {
        test: /\.json/,
        exclude: /node_modules/,
        loader: 'json-loader'
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
