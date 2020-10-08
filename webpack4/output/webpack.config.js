const path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    mode: 'none',
    entry: {
        'one': './src/one.js',
        'two': './src/two.js',
        'three': './src/three.js'
    },
    output: {
        filename: 'bundle_[name].js',
        path: path.resolve(__dirname, './dist')
    }
};
