const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    context: path.resolve(__dirname),
    mode: 'development',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist'),
        publicPath:'/'
    },
    resolve:{
       extensions: ['.js','.vue','.json'],
       alias: {
        'vue$': 'vue/dist/vue.esm.js',
       }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                include: [path.resolve('./src')]
            },{
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
               test: /\.js$/,
               use: ['babel-loader'],
               include: [path.resolve('./src')]
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
            template: 'index.html',
            inject: true
       }),
       // vue插件
       new VueLoaderPlugin(),
    ]
   
};
