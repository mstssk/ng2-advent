module.exports = {
    devtool: 'source-map',
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: './dist/scripts',
        filename: '[name].js'
    }
}
