const fileinclude = require("gulp-file-include");
const gulp = require("gulp");

const SRC_CSS = "mods/chrome.css";

// Default task: process CSS
gulp.task("build", () => {
  return gulp
    .src(SRC_CSS)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      }),
    )
    .pipe(gulp.dest(".")); // writes chrome.css in project root
});

// Watch if you like:
gulp.task("watch", () => gulp.watch("mods/**/*.css", gulp.series("css")));
