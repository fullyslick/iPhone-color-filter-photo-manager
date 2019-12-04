var gulp = require('gulp');
var clean = require('gulp-clean');
var tap = require('gulp-tap');
var util = require('gulp-util');

var coloredOriginals = [];

// Find colorized images and create an array of their originals
gulp.task('filter', function() {
  return gulp.src('source/**/*.JPG')
    .pipe(tap(function(file, t) {

      var fileName = file.relative;

      // If file name contains "IMG_E" pattern (colorized images file name pattern)
      // tweak file name string to corespond to its original file name pattern
      if (fileName.indexOf('IMG_E') > -1) {
        coloredOriginals.push(String.raw `${fileName.replace('IMG_E', 'IMG_').replace('\\', '/').replace (/^/,'source/')}`);
      }
    }))
});

// Remove .AAE files
gulp.task('clean:aae', function() {
  return gulp.src('source/**/*.AAE')
    .pipe(clean({
      force: true
    }))
    .pipe(gulp.dest('dist'));
});


// Clean the originals of the colorized images
gulp.task('clean:originals', function() {
  return gulp.src(coloredOriginals, {
      allowEmpty: true
    })
    .pipe(clean({
      force: true
    }))
    .pipe(gulp.dest('dist'));
});

// Sequance the tasks
gulp.task('default', gulp.series('clean:aae', 'filter', 'clean:originals'));
