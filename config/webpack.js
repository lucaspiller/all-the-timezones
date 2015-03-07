var path    = require("path");
var webpack = require("webpack");
var DEBUG   = true; // TODO

module.exports = {
  output: {
    path:          path.join(__dirname, "../dist/"),
    publicPath:    "assets/",
    filename:      "bundle.js",
  },

  cache:   DEBUG,
  debug:   DEBUG,
  devtool: DEBUG ? '#inline-source-map' : false,

  stats: {
    colors:  true,
    reasons: DEBUG
  },

  entry: {
    app: ["./app/scripts/app.js"]
  },

  module: {
    loaders: [
      // required to write "require('./style.css')"
      { test: /\.css$/,    loader: "style-loader!css-loader" },

      // inline small images
      { test: /\.gif$/,    loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/,    loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/,    loader: 'url-loader?limit=10000&mimetype=image/png' },

      // required for bootstrap icons
      { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
      { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
      { test: /\.svg$/,    loader: "file-loader?prefix=font/" },
    ]
  },
};
