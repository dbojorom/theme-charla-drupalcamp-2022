(() => {
  "use strict";

  /********** Plugins exports **********/

  exports.autoprefixer = require("autoprefixer");
  exports.chalk = require("chalk");
  exports.del = require("del");
  exports.gulp = require("gulp");
  exports.gulpPostcss = require("gulp-postcss");
  exports.gulpSass = require('gulp-sass')(require('sass'));
  exports.gulpSassGlob = require('gulp-sass-glob');
  exports.gulpSourcemaps = require("gulp-sourcemaps");
})();
