const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts', //app entry point
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",  // req or import 
        clean: true 
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        react: 'react'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ],
    }
}