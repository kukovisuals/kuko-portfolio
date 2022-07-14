const path = require('path');
module.exports = {
  watch: true,
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
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
          'style-loader',
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
          'style-loader',
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
       test: /\.jpg/,
       type: 'asset/resource'
     },
      {
       test: /\.mp4/,
       type: 'asset/resource'
     },
     {
          test: /\.(svg|eot|woff|woff2|ttf)$/,
          use: ['file-loader']
      },
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
   resolve: {
    extensions: ['*', '.js', '.jsx', ".tsx"],
  }
}