const gulp = require("gulp");
const postcss = require("gulp-postcss");
const atImport = require("postcss-import");
const wrap = require("postcss-wrap");

const SRC_CSS = "mods/chrome.css";

// Default task: process CSS
gulp.task("css", () => {
  return gulp
    .src(SRC_CSS)
    .pipe(
      postcss([
        atImport(), // inlines all your @import "…".css
        wrap({ selector: '@-moz-document url-prefix("chrome:")' }),
      ]),
    )
    .pipe(gulp.dest(".")); // writes chrome.css in project root
});

// Watch if you like:
gulp.task("watch", () => gulp.watch("mods/**/*.css", gulp.series("css")));
