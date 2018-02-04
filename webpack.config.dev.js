var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname,'dist/server.js')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname,'dist'),
        publicPath: '/',
        filename: 'bundle.js',
        // Bundle absolute resource paths in the source-map,
        // so VSCode can match the source file.
        devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [ ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module :{
        loaders: [
            {test: /\.ts$/, exclude: /node_modules/,loaders:"ts-loader"},
            {test: /\*.css$/,loaders:['style','css']}
        ]
    }
};