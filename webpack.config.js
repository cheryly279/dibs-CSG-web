const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + "/src",

    entry: "./js/app.jsx",

    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },

    resolve: {
        root: path.resolve(__dirname, './src'),
        extensions: ['', '.js', '.jsx', '.json']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.json$/,
                loader: require.resolve('json-loader')
            }
        ]
    }
};
