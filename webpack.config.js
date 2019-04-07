const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        app: './src/scripts/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: '[path][name].[ext]',
                        },
                    },
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: false } },
                    { loader: 'sass-loader', options: { sourceMap: false } }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/pages/about.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'teacher.html',
            template: './src/pages/teacher.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'courses.html',
            template: './src/pages/courses.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'pricing.html',
            template: './src/pages/pricing.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: './src/pages/blog.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/pages/contact.html',
        }),
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8080
    },
    mode: devMode ? 'development' : 'production'
};