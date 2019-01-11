// webpack.config.js
module.exports = {
  mode: 'development',
  entry: {
    component: './src/Console.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
};
