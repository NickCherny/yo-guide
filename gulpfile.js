const gulp = require('gulp');
const plumber = require('gulp-plumber');
const webpack = require('gulp-webpack');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const path = require('path');
const imagemin = require('gulp-imagemin');
const pngmin = require('gulp-pngmin');
const uglify = require('gulp-uglify');

gulp.task('sass', function () {
  gulp.src('./public/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});
gulp.task('images', function(){
  gulp.src('./public/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images-bundle'))
});
gulp.task('pngmin', function() {
  gulp.src('./public/images/**/*.png')
    .pipe(pngmin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function() {
  gulp.watch('./public/sass/**/*.scss', ['sass']);
});

gulp.task('develop', function () {
  gulp.src('./public/js/developer/**/*.js')
    .pipe(webpack({
      // entry: './public/js/developer/main.react.js',
      entry: './public/js/developer/main.angular.js',
      output: {
        filename: '[name].js'
      },
      watch: true,
      module: {
        loaders: [{
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }]
      },
      devtool: isDevelopment = 'development' ? 'inline-source-map' : null
    }))
    .pipe(gulp.dest('./public/js/'))
});
gulp.task('uglify', function(){
  gulp.src('./public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
]);
