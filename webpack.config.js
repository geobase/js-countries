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
    libraryTarget: "var",
    library: "Geo"
  },
  module: {
    exprContextCritical: false,
    preLoaders: [
      {
        include: /Geo\.js$/,
        loader: 'storage-loader'
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
  }
};
