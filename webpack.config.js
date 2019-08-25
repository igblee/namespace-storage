const path = require('path');
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'index.ts'),
  watch: true,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', ]
  },
  devtool: 'source-map',
};