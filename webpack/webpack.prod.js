var webpack = require("webpack"),
    path = require("path"),
    cfg = require("../config"),

    entries = require('./entries'),
    aliases = require('./aliases'),

    plugins = require('./plugins');

module.exports = {
    entry: entries,
    output: {
        path: path.join(cfg.build, 'js'),
        publicPath: 'build/js',
        filename: '[name].bundle.min.js'
    },
    resolve: {
        alias: aliases,
        extensions: ['.js', '.jsx', '.es6']
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
    plugins: plugins,
    devtool: 'source-map'
}