const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({mode}) => {
  console.log('server started')
  return {
    mode: mode,
    entry: './src/index.js',
    output: {
      filename: '[name].build.js',
      path: path.resolve(__dirname, 'build'),
    },

    module: {
      rules: [
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
          'file-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },

    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 9000
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          title: 'Affinage test',
          template: './src/index.html'
        }),      
    ],
   
  }
}