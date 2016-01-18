var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var srcPath = path.join(__dirname, 'src');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        module: path.join(srcPath, 'entry.js'),
        common: ['react', 'react-router', 'react-dom']
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js', ''],
        modulesDirectories: ['node_modules', 'src'],

    },
    output: {
        path: path.join(__dirname, 'tmp/js'),
        publicPath: '',
        filename: '[name].js',
        library: ['Example', '[name]'],
        pathInfo: true
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/, 
                exclude: /node_modules/, 
                loader: 'babel?cacheDirectory'
            },
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }            
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
          inject: true,
          template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("[name].css")
    ],
    debug: true,
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: './tmp/js/',
        historyApiFallback: true
    }
};
