require('@babel/polyfill');
const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production'
    return {
        mode: isProduction ? 'production': 'development',
        entry: ['@babel/polyfill', './src/index.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },{
                test: /\.s?css$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }]
        },
        performance : {
            hints : false
        },        
        devtool: isProduction ? 'source-map' : 'inline-source-map'
    }
};