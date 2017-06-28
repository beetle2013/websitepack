var path = require('path');

module.exports = {
    entry: './src/assets/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/, use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']
            }
        ]
    }
};