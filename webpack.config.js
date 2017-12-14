module.exports = {

    entry: "./Application/Index.js",
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }

};
