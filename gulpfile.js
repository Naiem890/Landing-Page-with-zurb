var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'node_modules/foundation-sites/scss'
];

gulp.task('sass', function() {
  return gulp.src('./scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      errLogToConsole: true
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['./scss/**/*.scss'], ['sass']);
});