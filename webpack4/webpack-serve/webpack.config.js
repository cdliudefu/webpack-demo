const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    serve:{
       port:'9090'
    },
    plugins:[
        // 该插件用法 http://webxiaoma.com//webpack/处理目录文件.html
        new HtmlWebpackPlugin({
           inject: true, 
           template: './index.html',
       }),
    ]
   
};
