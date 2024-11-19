import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export default {
    entry: './scripts/build.js',
    mode: 'production',
    plugins: [new MiniCssExtractPlugin({
        filename: 'build.css'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
}