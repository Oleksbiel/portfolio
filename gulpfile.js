'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
 

gulp.task('sass', function () {
  return gulp.src('./markup/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./production/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./markup/assets/scss/**/*.scss', ['sass']);
});

/////////// imagemin



const imagemin = require('gulp-imagemin');
 
gulp.task('default', () =>
	gulp.src('markup/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('production/images'))
);

