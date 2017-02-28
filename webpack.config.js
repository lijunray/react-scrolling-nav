var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'static/'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './static/'
    }
};