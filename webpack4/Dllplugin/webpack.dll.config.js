const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode:'development',
    entry:{
        vue:['vue']
    },
    output:{
        filename:'[name].dll.js',
        path:path.resolve(__dirname,'./library'),
        library:'_dll_[name]'
    },
    plugins:[
        new webpack.DllPlugin({
            name:'_dll_[name]',
            path: path.join(__dirname,'library','[name].json')
        })
    ]
}

