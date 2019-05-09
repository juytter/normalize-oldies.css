
// build normalize oldies : keep the code clean and minify.
// command-line :  gulp build


var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var beautify = require ('gulp-beautify-code');


function builder() {
  return gulp.src(['*.css'])
      .pipe(beautify())
      .pipe(gulp.dest('./'));
}


function minify() {
  return gulp.src(['*.css'])
      .pipe(cleanCSS({level: 1, compatibility: 'ie7'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('min/'));
}


var build = gulp.series(builder, minify);
gulp.task('build', build);
