const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:9000',
        'webpack/hot/only-dev-server',
        './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
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
    },
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/',
        compress: true,
        hot: true,
        port:9000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),// 开启全局的模块热替换（HMR）
        new webpack.NamedModulesPlugin()// 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
    ]
};
