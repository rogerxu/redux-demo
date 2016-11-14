/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';

const PATHS = {
  app: './src/client',
  build: path.join(__dirname, 'build'),
};

const config = {
  entry: {
    app: PATHS.app,
  },
  output: {
    filename: '[name].js',
    path: PATHS.build,
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: 'cacheDirectory',
        // include: [PATHS.app],
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: htmlWebpackTemplate,
      title: 'Demo',
      appMountId: 'app',
      inject: false,
    }),
  ],
};

export default config;
