const path = require('path');

module.exports = {
  mode: 'development',
  entry: './实现按需加载插件/main.js',
  output: {
    path: path.resolve('./实现按需加载插件/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              //我们自己手写的babel-plugin-import插件
              [
                path.resolve(__dirname, 'babel-plugin-import.js'),
                {
                  libraryName: 'lodash',
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
