// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    component: './src/Console.js',
    example: './example/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Console Example',
      chunks: ['example'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
};
