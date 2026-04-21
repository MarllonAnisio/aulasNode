const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './frontend/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: 'javascript/auto', // importante para trabalhar com modulos EC6
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }] 
            ]
          }
        },
        resolve: {
          fullySpecified: false // Isso ajuda o Webpack a não ser tão chato com extensões
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
  },
  devtool: 'source-map'
};