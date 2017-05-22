var webpack = require('webpack');

const definePlugin = new webpack.DefinePlugin({
    'process.env': { 'NODE_ENV': JSON.stringify('production') } 
});

const occurenceOrderPlugin = new webpack.optimize.OccurrenceOrderPlugin();

const uglifyJSPlugin = new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMaps: false,
    compress: {
        warnings: false
    }
});

const plugins = [
    definePlugin,
    occurenceOrderPlugin,
    uglifyJSPlugin
];

module.exports = plugins;