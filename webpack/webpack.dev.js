var webpack = require('webpack'),
    path = require('path'),
    cfg = require("../config"),

    entries = require('./entries'),
    aliases = require('./aliases');

module.exports = {
    entry: entries,
    output: {
        path: path.join(cfg.build, 'js'),
        publicPath: 'build/js',
        filename: '[name].bundle.dev.js'
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
    devtool: 'eval',
    cache: false
}