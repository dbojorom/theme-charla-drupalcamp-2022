(() => {
  "use strict";

  /********** Imports **********/

  const { cleanCss } = require("./tasks/clean"),
    { gulp } = require("./plugins"),
    { sassCss, sassCssProd } = require("./tasks/styles"),
    { watchSass } = require("./tasks/watch");

  /********** Task export **********/

  exports["cl:css"] = cleanCss;
  exports["sass"] = sassCss;
  exports["sass:prod"] = sassCssProd;
  exports["wt:sass"] = watchSass;

  exports["prod"] = gulp.series([cleanCss, sassCssProd]);

  exports.default = gulp.series([cleanCss, sassCss, watchSass]);
})();
