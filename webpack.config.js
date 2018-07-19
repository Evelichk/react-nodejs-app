'use strict';

const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    mode: 'none',

    entry: './application/Index.js',

    module: {
        rules: [{
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },

    output: {
        path: __dirname + '/public/build',
        filename: 'bundle.js'
    },

    devtool: NODE_ENV == 'development' ? 'source-map' : null,

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]
};
