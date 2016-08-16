'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	imagemin = require('gulp-imagemin'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch');
var concat = require('gulp-concat'),
	jsConcat1 = 'bower_components/javascript-equal-height-responsive-rows/grids.min.js';
    

//////  Tasks

gulp.task('sass', function () {
  return gulp.src('./markup/scss/all.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./production/css'))
});

gulp.task('img', () =>
	gulp.src('markup/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('production/images'))
);

gulp.task('js', function () {
    return gulp.src('./markup/js/assets.js')
        .pipe(gulp.dest('./production/js'))
});

gulp.task('jquery', () =>
	gulp.src('./bower_components/jquery/dist/jquery.js')
		.pipe(gulp.dest('markup/js/'))
		.pipe(gulp.dest('production/js/'))
);

gulp.task('scripts', function() {
  return gulp.src([jsConcat1])
    .pipe(concat('allInteractive.js'))
    .pipe(gulp.dest('production/js/'));
});

gulp.task('watch', function() {
    gulp.watch("./markup/scss/**/*.scss", ['sass']);
    gulp.watch("./markup/js/assets.js", ['js']);
});
