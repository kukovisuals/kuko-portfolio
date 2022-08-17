const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  // watch: true,
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    chunkIds: 'named',
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
      new MiniCssExtractPlugin(), 
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'), // template file
        favicon: "./public/favicon.ico",
        filename: 'index.html', // output file
   }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer', {
                      overrideBrowserslist: ['last 3 versions', 'ie >9']
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      overrideBrowserslist: ['last 3 versions', 'ie >9']
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader'
        ],
      },
     {
          test: /\.(svg|eot|woff|woff2|ttf)$/,
          use: ['file-loader']
      },
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader",
        exclude: /node_modules/,
        options: { allowTsInNodeModules: true }
      }
    ]
  },
   resolve: {
     extensions: ["*",".ts", ".tsx", ".js", "jsx"]
  },
}