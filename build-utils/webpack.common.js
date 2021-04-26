const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css)$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: true,
          //   },
          // },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin({
      favicon: './assets/favicon/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'bundle.js',
  },
};
