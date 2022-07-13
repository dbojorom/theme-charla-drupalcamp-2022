(() => {
  "use strict";

  /********** Global Configs **********/

  const // Paths
    confPaths = {
      images: {
        src: "src/images/",
        dist: "images/",
        ignore: [],
      },
      js: {
        dist: "js/",
      },
      styles: {
        files: "**/*.{scss,sass}",
        src: "src/sass/",
        dist: "css/",
        ignore: [],
      },
    };

  /********** Plugins Configs **********/

  const // Plugins options
    pluginOptions = {
      gulpSourcemaps: {
        outputStyle: "expanded",
        path: "maps/",
      },
    };

  /********** Configs exports **********/

  exports.confPaths = confPaths;
  exports.pluginOptions = pluginOptions;
})();
