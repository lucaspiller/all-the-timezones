var path              = require("path");
var webpack           = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  output: {
    path:          path.join(__dirname, "../build/dev/"),
    publicPath:    "/assets/",
    filename:      "bundle.js",
  },

  cache:   true,
  debug:   true,
  devtool: 'inline-source-map',

  stats: {
    colors:  true,
    reasons: true
  },

  entry: {
    app: ["./app/scripts/app.js"]
  },

  plugins: [
    // extract inline css into separate 'style.css'
    new ExtractTextPlugin('style.css')
  ],

  module: {
    loaders: [
      { test: /\.css$/,    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')  },
      { test: /\.scss$/,   loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap') },
      { test: /\.less$/,   loader: ExtractTextPlugin.extract('css?sourceMap!less') },

      // inline small images
      { test: /\.gif$/,    loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/,    loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/,    loader: 'url-loader?limit=10000&mimetype=image/png' },

      // required for bootstrap icons
      { test: /\.woff$/,   loader: "file-loader?prefix=font/" },
      { test: /\.woff2$/,  loader: "file-loader?prefix=font/" },
      { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
      { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
      { test: /\.svg$/,    loader: "file-loader?prefix=font/" },

      { test: /\.json$/,   loader: "json-loader" },

      // Babel for React JSX and ES6 support
      { test: /\.js$/,     loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/,    loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
};
