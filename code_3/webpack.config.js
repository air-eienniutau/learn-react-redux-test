var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: {
    index: './main.js',
    common: ['react','react-dom','redux','react-redux']
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread',
      },
    ]
  },
  plugins: [
    new CommonsChunkPlugin('common','init.js')
  ]
};