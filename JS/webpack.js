// Форимирование анализируещего файла webpack
webpack --json --profile >stats.json
// Запихнуть получившийся json сюда
http://webpack.github.io/analyse

Хорошая справка по конфигурации
https://github.com/webpack/docs/wiki/configuration

Как настроить вебпак для сборки Express
http://jlongster.com/Backend-Apps-with-Webpack--Part-I


Постобработка CSS
https://github.com/postcss/postcss
https://github.com/postcss/postcss-loader
https://vk.com/postcss


'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: { // Все точки входа подключаются именно в html через тег script
    "binfront/js/index": "./srcfront/js",
    "binback/js/index": "./srcback/js"
  },
  output: {
    path: __dirname,
    filename: "[name].js",
    // Экспорт глобальных переменных по названию файла
    library: "[name]"
  },
  watch: NODE_ENV == 'development',
  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,
  
  plugins: [
    new webpack.NoErrorsPlugin(),
    // Вынос общих частей в отдельный фаил
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      chunks: ["binfront/js/index"]
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      chunks: ["binback/js/index"]
    }),
    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV)
      })
    ],
  
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }]
  }
};

// Аглификация
// if (NODE_ENV == 'production') {
//   module.exports.plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false,
//         drop_console: true,
//         unsafe: true
//       }
//     })
//   )
// }