const path = require('path');
// 拆分css插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 自动生成html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包前清除遗留文件 插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 复制目录插件
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
               test: /\.less$/,
               use: [
                     MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
               ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                           name: '[path][name][hash:8].[ext]',
                           limit: 10000 // 10kb以下
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 与output中的配置选项相似
            //两个选项都是可选的
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            inject: false, // 将生成的资源引入到html中
            // 模板路径'node_modules / html-webpack-template / index.ejs'
            template: require('html-webpack-template'),
            // template: './index.html',
            title: '模版html',
            links: [ // 引入<link>
                {
                   href: 'http://webxiaoma.com/img/manong.jpg',
                   rel: 'icon'
                }
            ],
            scripts: [ // 引入<script>
                'http://example.com/somescript.js'
            ]
        }),
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([ // 复制目录
            {
                // 要复制的目录
                from: path.resolve(__dirname, './static'),
                // 打包到输出目录下的static目录中
                to: 'static',
                // 忽略png文件，['.*']表示复制任何文件
                ignore: ['*.png']
            }
        ])
    ]
};
