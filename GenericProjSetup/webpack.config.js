var path = require('path');

module.exports = {
    entry : './src/js/app.js', 
    output : {
        path: path.resolve(__dirname,'dist'),
        filename:'build.js',
        publicPath:'dist'
    },
    module : {
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['es2015']
                  }
                }
              }
        ]
    }
}