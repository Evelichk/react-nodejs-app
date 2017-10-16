module.exports = {
    entry: "./Application/app.js",
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
        path: path.resolve(__dirname, './Application'),
        filename: 'bundle.js'
    }
};
