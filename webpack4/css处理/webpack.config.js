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
