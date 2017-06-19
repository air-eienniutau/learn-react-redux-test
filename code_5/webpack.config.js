var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: {
    index: './develop/main.js',
    common: ['react','react-dom','redux','react-redux']
  },
  output: {
    path: path.resolve(__dirname, './src'),
    filename: '[name].js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread' },
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      names:['common','manifest']
    })
  ]
};