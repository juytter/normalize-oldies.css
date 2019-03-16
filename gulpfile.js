
// command-line :  gulp build
// minimal build to 1.keep a clean source code  2.build minified version.

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var beautify = require ('gulp-beautify-code');

function minify() {
  return gulp.src(['normalize-oldies.css'])
      .pipe(cleanCSS({level: 1, compatibility: 'ie7'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./'));
}
function keepClean() {
  return gulp.src(['normalize-oldies.css'])
      .pipe(beautify())
      .pipe(gulp.dest('./'));
}

var build = gulp.series(keepClean, minify);
gulp.task('build', build);
