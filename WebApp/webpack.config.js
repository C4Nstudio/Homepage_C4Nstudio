var path = require('path');

module.exports = {
  entry: './public/javascripts/client.js',
  output: {
    path: path.join(__dirname, '/public/javascripts'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  }
};
