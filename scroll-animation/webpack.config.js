module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    devServer: {
        port: 9000,
        static: {
            directory:  __dirname
        },
        client: {
            overlay: false,
        },
    }
};