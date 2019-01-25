const webpack = require('webpack'),
  path = require('path'),
  CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'dist')], {
      root: __dirname,
      watch: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  mode: 'production',
}
