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
           chunks:'all',
           minSize:100,  // 默认30000
            //  maxSize:160,
           automaticNameDelimiter: '-', // 将连接符~ 换成 -
           cacheGroups:{
                default: { // 默认缓存组的配置
                    name:'commons',
                    minChunks: 2,
                    //定义缓存组的优先级 更高优先级的缓存组可以优先打包所选择的模块）（默认自定义缓存组优先级为0）
                    priority: -20, 
                    //选项允许复用已经存在的代码块，而不是新建一个新的，需要在精确匹配到对应模块时候才会生效。
                    reuseExistingChunk: true,
                },
                query: {
                    //选项用于控制哪些模块被这个缓存组匹配到 默认所有模块
                    // 值得类型RegExp、String和Function
                    test: /[\\/]node_modules[\\/]/, // 这里选的是node_modules中的模块
                    priority: -10 //定义缓存组的优先级
                }
           }
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
