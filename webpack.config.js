var path = require('path')
var webpack = require('webpack')

function resolve (file) {
  return path.join(__dirname, file)
}

module.exports = {
  entry: resolve('component.js'),
  output: {
    path: resolve('dist'),
    filename: 'vue-json-schema.js',
    libraryTarget: 'umd',
    library: 'vue-json-schema',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('.'), resolve('test')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
        query: { compact: false }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      parallel: true,
      compress: {
        warnings: false
      }
    })
  ],
  externals: {}
}
