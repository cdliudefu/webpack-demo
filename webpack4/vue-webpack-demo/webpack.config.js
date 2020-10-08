const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
               test: /\.js$/,
               include: [
                   path.resolve(__dirname,'src')
               ],
               loader: 'babel-loader'
            },
            {
               test: /\.vue$/,
               loader: 'vue-loader',
               options: {
                    video: ['src', 'poster'],
                    source: 'src',
                    img: 'src',
                    image: 'xlink:href'
               }
            }
        ]
    }
};
