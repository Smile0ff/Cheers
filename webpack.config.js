var webpack = require("webpack"),
    path = require("path"),
    cfg = require("./config");

const pages = {
    home: cfg.js +"/pages/"+ "home.js"
}

module.exports = {
    entry: pages,
    output: {
        path: cfg.build,
        publicPath: "build/js",
        filename: "[name].bundle.dev.js"
    },
    resolve: {
        alias: {
            Root: path.resolve(__dirname, "assets/js"),
            Config: path.resolve(__dirname, "assets/js/config"),
            Components: path.resolve(__dirname, "assets/js/components"),
            Utility: path.resolve(__dirname, "assets/js/utility")
        },
        extensions: [".js", ".json", ".jsx", ".css"]
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
            "process.env": { "NODE_ENV": JSON.stringify('production') } 
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
    devtool: "eval",
    cache: false
}