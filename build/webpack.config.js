var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProvidePlugin = require('webpack').ProvidePlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: './src/assets/js/index.js',
    output: {
        filename: 'assets/js/bundle.[chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/, use: ['url-loader?limit=100000&name=assets/imgs/[hash].[ext]']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader?limit=100000&name=assets/fonts/[hash].[ext]']
            }
        ]
    },
    plugins: [
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
            "windows.jQuery": 'jquery',
        }),
        new HtmlWebpackPlugin({
            template:'index.html',
            title: 'Output Management',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'assets/css/style.[chunkhash].css'
        }),
    ],
};