const path = require('path');

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
   
};
