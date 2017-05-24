var path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "css-loader"
        }, {
            test: /\.js?$/,
            exclude: /node_modules|dist/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react',
        }]
    }
};
