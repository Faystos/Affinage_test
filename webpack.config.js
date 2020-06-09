const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let styleMode;



module.exports = ({mode}) => {
  console.log('server started');
  if (mode === 'development') {
    console.log(`mode active: ${mode}`);
    styleMode = {
      test: /\.less$/,            
      use: [              
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
              sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
                autoprefixer({
                    browsers:['ie >= 8', 'last 4 version']
                })
            ],
            sourceMap: true
        }
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              strictMath: true,
            },
          },
        },
      ]
    }    
  }  

  if (mode === 'production') {
    console.log(`mode active: ${mode}`);
    styleMode = {
      test: /\.(css|less)$/,            
      use: [              
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
              sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',          
          options: {
            plugins: [
                autoprefixer({
                    browsers:['ie >= 8', 'last 4 version']
                })
            ],
            sourceMap: true
        }          
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              strictMath: true,
            },
          },
        },
      ]
    }
  }

  return {
    mode: mode,
    entry: './src/index.js',
    output: {
      filename: '[name].build.js',
      path: path.resolve(__dirname, 'build'),
    },

    module: {
      rules: [
        styleMode,
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
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
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
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],   
  }
}