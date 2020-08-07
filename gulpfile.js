'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('sass/**/*.scss')
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css/'));
});

gulp.task('js', () => {
  return gulp.src(['js/**/*.js'], { sourcemaps: true })
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('css/'), { sourcemaps: true });
});

gulp.task('watch', () => {
  gulp.watch('sass/**/*.scss', gulp.series('sass'));

  gulp.watch('js/**/*.js', gulp.series('js'));
});