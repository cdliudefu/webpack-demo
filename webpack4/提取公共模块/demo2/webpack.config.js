const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包前清除遗留文件 插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname),
    mode: 'production',
    entry:{
       'main':'./src/main.js',
       'pageOne':'./src/pageOne.js',
       'pageTwo':'./src/PageTwo.js',
    },
    output: {
        filename: '[name].[hash:4].js',
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
          /*
                all  异步和同步都提取分离
                async 表示对动态（异步）导入的模块进行分离。
                initial 表示对初始化值进行分离优化。
            */
            chunks:'async',
            minSize:10,  // 默认30000
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
