const gulp = require('gulp');
const plumber = require('gulp-plumber');
const webpack = require('gulp-webpack');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const autoprefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
  gulp.src('./public/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefix({
      browser: ['last 4 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload())
})
gulp.task('images', function () {
  gulp.src('./public/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images-bundle'))
})

gulp.task('watch', function () {
  gulp.watch('./public/sass/**/*.scss', ['sass'])
})

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
      devtool: 'inline-source-map'
    }))
    .pipe(gulp.dest('./public/js/'))
})
gulp.task('uglify', function () {
  gulp.src('./public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
})

gulp.task('default', [
  'sass',
  'develop',
  'watch'
])
