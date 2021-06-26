const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    module: {
        rules: [
            {
                test: /\.jd$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
};
