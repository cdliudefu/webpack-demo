const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack')
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin
// 也可以这么引入 require('webpack/lib/HotModuleReplacementPlugin')

module.exports = {
    context: path.resolve(__dirname),
    mode: 'none',
    output: {
        filename: 'build.js',
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
    watch: true, // 开启观察者模式
    watchOptions:{
        // 不监听的文件
       ignored:['node_modules'],
       //当第一个文件更改，会在重新构建前增加延迟。这个选项允许 webpack 
       //将这段时间内进行的任何其他更改都聚合到一次重新构建里
       aggregateTimeout:300,
       // 每秒检查一次变动
       poll:1000
    },
    devServer:{
        host: '0.0.0.0',
        port: 9000, // 启动端口默认8080
        hot: true, // 是否启动热模块替换
        // hotOnly: true, // 仅启动自动刷新
        useLocalIp: true, //允许浏览器使用本地 IP 打开。
        open: true, // 启动后是否自动打开默认浏览器
    },
    plugins:[
        // 该插件用法 http://webxiaoma.com//webpack/处理目录文件.html
        new HtmlWebpackPlugin({
           inject: true, 
           template: './index.html',
       }),
       // 模块热替换
       new HotModuleReplacementPlugin()
    ]
   
};
