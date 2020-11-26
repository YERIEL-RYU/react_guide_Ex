const path = require('path');
module.exports = {
    entry: './src/browser.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename : 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use : {loader: 'babel-loader'},
                exclude : /node_modules/
            }
        ]
    }
}