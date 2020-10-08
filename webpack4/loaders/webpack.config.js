const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, './dist')
  }, 
  resolveLoader:{
    modules:['node_modules','./loader/'],
  },
  serve:{
     open:true,
     port:8088  
  },
  module: {
      rules: [
          {
             test: /\.js$/,
             use: [
                {
                    loader:'test-loader',
                    options:{
                        name: '小明',
                        age:23
                    }
                }
             ]
          }
      ]
  },
  plugins:[
    // 该插件用法 http://webxiaoma.com//webpack/处理目录文件.html
    new HtmlWebpackPlugin({
       inject: true, 
       template: './index.html',
   }),
  ]

};


