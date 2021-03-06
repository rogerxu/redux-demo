/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import validate from 'webpack-validator';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';

const TARGET = process.env.npm_lifecycle_event;
const ENABLE_POLLING = process.env.ENABLE_POLLING;

const PATHS = {
  app: path.resolve(__dirname, './src/client'),
  build: path.join(__dirname, 'build'),
};

process.env.BABEL_ENV = TARGET;

const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: [/node_modules/],
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
        },
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
    new OpenBrowserPlugin({
      url: 'http://localhost:8080',
    }),
  ],
};

const vendorList = [
  ...['react', 'react-dom', 'react-redux'],
  ...['redex', 'redux-actions', 'redux-immutable', 'redux-logger', 'redux-thunk'],
];

const prodConfig = {
  entry: {
    vendor: vendorList,
  },
  devtool: 'source-map',
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.build], {
      root: process.cwd(),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
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

export default validate(config, {
  quiet: true,
});
