const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'public', 'build');
const mainPath = path.resolve(__dirname, 'src', 'app.jsx');

module.exports = {
    entry: mainPath,
    output: {
        path: buildPath,
        filename: `bundle.js`,
        publicPath: '/build/'
    },
    resolve: {
        root: path.resolve(__dirname, 'src'),
        extensions: ['', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
                query: {
                    presets: [
                        'babel-preset-es2015',
                        'babel-preset-react'
                    ].map(require.resolve)
                }
            },
            {
                test: /\.json$/,
                loader: require.resolve('json-loader')
            }
        ]
    }
};
