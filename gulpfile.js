const gulp = require('gulp');
const plumber = require('gulp-plumber');
const webpack = require('gulp-webpack');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./public/sass/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./public/sass/*.scss', ['sass']);
});

gulp.task('develop', function () {
  gulp.src('./public/js/developer/**/*.js')
    .pipe(webpack({
      watch: true,
      module: {
        loader: [{
          test: /\.babel.js$/,
          exclude: /(node_modules|components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }]
      }
    }))
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
]);
