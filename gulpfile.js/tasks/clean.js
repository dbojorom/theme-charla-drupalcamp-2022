(() => {
  "use strict";

  /********** Imports **********/

  const { confPaths, pluginOptions } = require("../configs"),
    { chalk, del } = require("../plugins");

  /********** Clean Tasks **********/

  // Css cleaning task
  async function cleanCss() {
    let files = [confPaths.styles.dist + "**/*"];
    Array.prototype.push.apply(files, confPaths.styles.ignore);

    const deletedFilePaths = await del(files);

    if (deletedFilePaths.length > 0) {
      console.log(
        chalk.inverse.greenBright(" DONE "),
        chalk.inverse.green(" Deleted style files from: ") +
        chalk.bold.green(" " + confPaths.styles.dist),
        chalk.green("\n" + deletedFilePaths.join("\n"))
      );

      if (confPaths.styles.ignore.length > 0) {
        console.log(
          chalk.inverse.cyanBright("\n" + " INFO "),
          chalk.inverse.cyan(" Ignored files: ") +
          chalk.bold.cyan("\n" + confPaths.styles.ignore.join("\n"))
        );
      }
    } else {
      console.log(
        chalk.inverse.cyanBright(" INFO "),
        chalk.inverse.cyan(" No style files to delete in: ") +
        chalk.bold.cyan(" " + confPaths.styles.dist)
      );
    }
  }

  /********** Exports **********/

  exports.cleanCss = cleanCss;
})();
