const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                // ***使用 file-loader 处理图片***//
            // {
            //     test: /\.(png|jpe?g|gif)$/,
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             // 将图片打包到了path目录下，并生成原图片名加8位hash值的图片名
            //            name: '[path][name][hash:8].[ext]',
            //            // 将图片打包到该公共目录下
            //            outputPath: 'images/'
            //            // 图片引入资源的共路径，发布线上时很有用
            //         //    publicPath: path.resolve(__dirname, './dist/images')
            //         }
            //     }
            // },

                // ***使用 url-loader 处理图片***//
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                           name: '[path][name][hash:8].[ext]',
                           limit: 10000 // 10kb以下
                        }
                    },
                    {
                        loader: 'image-webpack-loader',// 压缩图片
                        options: {
                          disable: false //是否禁止压缩，默认false
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
        })
    ]
};
