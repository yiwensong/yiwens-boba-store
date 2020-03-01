var webpack = require('webpack');  
module.exports = {  
    entry: [
        "./boba/static/js/app.js"
    ],
    output: {
        path: __dirname + '/boba/static',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
    ]
};
