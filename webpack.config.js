var path = require('path');

module.exports = function (env) {
    return {
        entry: env.production ? './src/navbar/index.js' : './src/index.js',
        output: {
            path: path.join(__dirname, env.production ? 'lib/' : 'static/'),
            filename: env.production ? 'index.js' : 'app.bundle.js'
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
};