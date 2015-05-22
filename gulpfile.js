var gulp                 = require("gulp");
var gutil                = require("gulp-util");
var webpack              = require("webpack");
var WebpackDevServer     = require("webpack-dev-server");
var webpackDevConfig     = require("./config/webpack.dev.js");
var webpackReleaseConfig = require("./config/webpack.release.js");

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function() {
  gulp.watch(["app/**/*"], ["webpack:build-dev"]);
});

gulp.task("build-release", ["webpack:build-release"]);

// modify some webpack config options
var myDevConfig = Object.create(webpackDevConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
  // run webpack
  devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("webpack-dev-server", function(callback) {
  // Start a webpack-dev-server
  new WebpackDevServer(devCompiler, {
    contentBase: "./build/dev/",
    publicPath: "/assets/",
    stats: {
      colors: true
    }
  }).listen(8080, "0.0.0.0", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://0.0.0.0:8080/");
  });
});

// modify some webpack config options
var myreleaseConfig = Object.create(webpackReleaseConfig);
myreleaseConfig.debug = false;

// create a single instance of the compiler to allow caching
var releaseCompiler = webpack(myreleaseConfig);

gulp.task("webpack:build-release", function(callback) {
  // run webpack
  releaseCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build-release", err);
    gutil.log("[webpack:build-release]", stats.toString({
      colors: true
    }));
    callback();
  });
});
