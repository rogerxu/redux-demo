/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';

const TARGET = process.env.npm_lifecycle_event;
const ENABLE_POLLING = process.env.ENABLE_POLLING;

const PATHS = {
  app: './src/client',
  build: path.join(__dirname, 'build'),
};

process.env.BABEL_ENV = TARGET;

const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    filename: '[name].js',
    path: PATHS.build,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: 'cacheDirectory',
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

const prodConfig = {
  devtool: 'source-map',
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production',
    }),
  ],
};

const devConfig = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: 'localhost',
    port: 8080,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
  ],
};

if (ENABLE_POLLING) {
  devConfig.watchOptions = {
    aggregateTimeout: 300,
    poll: 1000,
  };
}

let config;

switch (TARGET) {
  case 'build':
    config = merge(commonConfig, prodConfig);
    break;
  default:
    config = merge(commonConfig, devConfig);
}

export default config;
