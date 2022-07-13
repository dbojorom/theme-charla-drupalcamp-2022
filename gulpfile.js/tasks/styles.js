(() => {
  "use strict";

  /********** Imports **********/

  const { confPaths, pluginOptions } = require("../configs"),
    {
      autoprefixer,
      chalk,
      gulp,
      gulpSass,
      gulpPostcss,
      gulpSassGlob,
      gulpSourcemaps,
    } = require("../plugins");

  /********** Style Tasks **********/

  // Sass to css compilation task
  function sassCss() {
    console.log(
      chalk.inverse.greenBright(" DONE "),
      chalk.inverse.green(" Compiled sass files from: ") +
        chalk.bold.green(" " + confPaths.styles.src),
      chalk.inverse.green(" Creating css mapping in: ") +
        chalk.bold.green(" " + pluginOptions.gulpSourcemaps.path)
    );

    return gulp
      .src(confPaths.styles.src + confPaths.styles.files)
      .pipe(gulpSourcemaps.init())
      .pipe(gulpSassGlob())
      .pipe(
        gulpSass({
          outputStyle: pluginOptions.gulpSourcemaps.outputStyle,
          includePaths: ['./node_modules']
        }).on("error", gulpSass.logError)
      )
      .pipe(gulpPostcss([autoprefixer()]))
      .pipe(gulpSourcemaps.write(pluginOptions.gulpSourcemaps.path))
      .pipe(gulp.dest(confPaths.styles.dist));
  }

  // Production: Sass to css compilation task
  function sassCssProd() {
    console.log(
      chalk.inverse.greenBright(" DONE "),
      chalk.inverse.green(" Compiled sass files from: ") +
        chalk.bold.green(" " + confPaths.styles.src),
      chalk.inverse.green(" Creating css mapping in: ") +
        chalk.bold.green(" " + pluginOptions.gulpSourcemaps.path)
    );

    return gulp
      .src(confPaths.styles.src + confPaths.styles.files)
      .pipe(gulpSassGlob())
      .pipe(
        gulpSass({
          outputStyle: 'compressed',
          includePaths: ['./node_modules']
        }).on("error", gulpSass.logError)
      )
      .pipe(gulpPostcss([autoprefixer()]))
      .pipe(gulp.dest(confPaths.styles.dist));
  }

  /********** Exports **********/

  exports.sassCss = sassCss;
  exports.sassCssProd = sassCssProd;
})();
