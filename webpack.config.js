module.exports = {
  // The main entry of our app
  entry: ['./src/main.js'],
  
  // Output configuration
  output: {
    path: __dirname + '/public/',
    publicPath: 'public/',
    filename: 'build.js'
  },

  module: {
    loaders: [
      // Process *.vue files using vue-loader
      { test: /\.vue$/, loader: 'vue' },
      // Process *.js files using babel-loader, exclude node_modules
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
