
// command-line :  gulp build
  // build normalize oldies + LTS : clean code and minify.


var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var beautify = require ('gulp-beautify-code');
var postcss = require ('gulp-postcss');
var importCSS = require ('postcss-import');


function builder() {
  var plugins = [
    importCSS()
  ];
  return gulp.src(['src/*.css'])
      .pipe(beautify())
      .pipe(postcss(plugins))
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
