import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

const common = {
  entry: path.resolve(__dirname, './src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader'
        }]
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'svg-sprite-loader'
        }]
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({ browsers: ['last 2 versions', 'ie 9-11'] })
            ]
          }
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [
              path.resolve(__dirname, 'node_modules/nebula-css'),
              path.resolve(__dirname, 'node_modules/nebula-components')
            ]
          }
        }]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new StyleLintPlugin({
      syntax: 'scss',
      context: 'src',
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
      configFile: '.stylelintrc'
    })
  ],
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.jsx']
  }
};

const dev = {
  devServer: {
    historyApiFallback: true
  },
  devtool: 'source-map'
};

const prod = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ]
};

const config = (env) => {
  switch (env) {
    case 'build':
      return merge(common, prod);
    case 'start':
      return merge(common, dev);
    default:
      return common;
  }
};

export default config(process.env.npm_lifecycle_event);