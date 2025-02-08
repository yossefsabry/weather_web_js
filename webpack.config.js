const path = require("node:path");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './public/js/script.js', // Your entry JavaScript file (can be moved to src folder)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public/dist'), // Bundle will go to dist folder
        publicPath: '/dist/', // Important for webpack dev server to resolve the path for bundle.js
    },
    mode: 'development',
    devtool: 'source-map', // Enable source maps for easier debugging
    plugins: [
        new Dotenv(), // Automatically load variables from .env file
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), 
            // Serve static files from the public folder (make sure index.html is here)
        },
        compress: true, // Enable gzip compression
        port: 3000, // Change this if needed
        open: true, // Open the browser when the server starts
        historyApiFallback: true, 
        // For single-page applications (SPA), ensures correct routing even after reload
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply Babel loader for JS files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], // Use preset for ES6+ syntax
                    },
                },
            },
            {
                test: /\.css$/, // If you have CSS files, use style-loader and css-loader
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

