const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: { path:path.resolve(__dirname, "dist") },
    resolve: { extensions: ['.tsx', '.ts', '.js'] },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
     },
     plugins:[
         new HtmlWebpackPlugin({
              template: path.join(__dirname,'/src/index.html')
         }) 
     ]
};
