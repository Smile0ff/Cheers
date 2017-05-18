var webpack = require("webpack"),
    path = require("path"),
    cfg = require("../config"),

    entries = require('./entry');

module.exports = {
    entry: entries,
    output: {
        path: path.join(cfg.build, 'js'),
        publicPath: 'build/js',
        filename: '[name].bundle.min.js'
    },
    resolve: {
        alias: {
            Root: cfg.js,
            Config: path.join(cfg.js, 'config'),
            Components: path.join(cfg.js, 'components'),
            Utility: path.join(cfg.js, 'utility')
        },
        extensions: ['.js', '.json', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': JSON.stringify('production') } 
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMaps: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    devtool: 'source-map'
}