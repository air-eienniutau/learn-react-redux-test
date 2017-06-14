var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: {
    index: './js/main.js',
    common: ['react','react-dom','redux','react-redux']
  },
  output: {
    path: './build',
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name:'common'
    })
  ]
};
