const path                  = require('path');
const webpack               = require('webpack');
const ExtractTextPlugin     = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const CopyWebpackPlugin     = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/common.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: 
                    ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    }),
            },
            {
                test: /\.(gif|png|jpe?g|svg|jpg)$/i,
                loader: "file-loader",
                    options: {
                        loader: 'image-webpack-loader',
                        name: 'images/[name].[ext]',
                        publicPath: 'src/images',
                        outputPath: 'dist/images',
                    }
            },
            {
                test: /\.(ttf|eot|woff(2)?)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'src/images',
                        outputPath: 'dist/fonts/',
                    }
                }]
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: true
    },
    plugins: [
        new ExtractTextPlugin('/css/style.css'),
        new HtmlWebpackPlugin({
            title: 'Genesis Test. Landing',
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/images/',
                to:   'images/',
                flatten: true
            },
            {
                from: 'src/fonts',
                to:   'fonts/'
            }
        ]),
    ]
};