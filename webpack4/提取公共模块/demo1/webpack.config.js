const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包前清除遗留文件 插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname),
    mode: 'none',
    output: {
        filename: 'build.js',
        chunkFilename:'[name].buildChunk.js',
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
       open: true,
    },
    optimization:{
        splitChunks:{
           chunks:'all',//  async、 initial 、 all
           name:'jquery', //打包后的名字
        }
    },
    plugins:[
        // 该插件用法 http://webxiaoma.com//webpack/处理目录文件.html
        new HtmlWebpackPlugin({
           inject: true, 
           template: './index.html',
       }),
       new CleanWebpackPlugin(['dist']),

    ]
   
};
