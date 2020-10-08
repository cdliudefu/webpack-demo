const path = require('path');
const TestPlugin = require('./lib/index.js');

module.exports = {
   mode: 'development',
   module: {
     rules: [
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }
     ]
   },
   plugins: [
       new TestPlugin({
           name: '小明',
           htmlPath: path.join(__dirname,'index.html')
       })
   ]
};
