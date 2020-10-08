const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname),
    mode: 'none',
    output: {
        filename: 'build.js',
        chunkFilename:'[name].[hash:5].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
               test: /\.js$/,
               use: ['babel-loader'],
               exclude: /(node_modules)/
            }
        ]
    },
    serve:{
       port:'9090',
       open:true,
    },
    plugins:[
        // 该插件用法 http://webxiaoma.com//webpack/处理目录文件.html
        new HtmlWebpackPlugin({
           inject: true, 
           template: './index.html',
       }),
    ]
   
};
