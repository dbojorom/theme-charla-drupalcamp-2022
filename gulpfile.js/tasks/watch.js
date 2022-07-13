(() => {
  "use strict";

  /********** Imports **********/

  const { confPaths, pluginOptions } = require("../configs"),
    { gulp } = require("../plugins"),
    { sassCss } = require("../tasks/styles");

  /********** Watch Tasks **********/

  // Watch sass compilation task
  function watchSass() {
    gulp.watch(
      confPaths.styles.src + confPaths.styles.files,
      gulp.series(sassCss)
    );
  }

  /********** Exports **********/

  exports.watchSass = watchSass;
})();
