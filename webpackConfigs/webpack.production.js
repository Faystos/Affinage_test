const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [                    
          {                      
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",                      
          },
          {
            loader: "postcss-loader",
            options: {                        
              config: { path: `webpackConfigs/postcss.config.js` }
            }
          },
          {
            loader: "less-loader",                      
          }
        ],
      },
    ],        
  },
  plugins: [new MiniCssExtractPlugin()],   
});