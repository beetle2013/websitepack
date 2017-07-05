var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ProvidePlugin = require('webpack').ProvidePlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: './src/assets/js/index.js',
    output: {
        filename: 'assets/js/bundle.[chunkhash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
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
                test: /\.(png|jpe?g|gif)(\?.*)?$/, use: ['url-loader?limit=100000&name=assets/imgs/[name].[ext]']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/, use: ['file-loader?name=assets/fonts/[name].[ext]']
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
            template: 'src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'assets/css/style.[chunkhash].css'
        }),
        new CopyWebpackPlugin([{
            from: './src/assets/imgs', to: '../dist/assets/imgs'
        }]),

    ],

};