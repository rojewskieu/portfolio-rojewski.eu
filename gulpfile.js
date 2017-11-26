
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	less = require('gulp-less'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin');


var paths = {
    allScripts: ['gulpfile.js','public_html/js/app/*.js']
};

gulp.task('lint', function() {
    return gulp.src(paths.allScripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('scripts', function() {
    return gulp.src('public_html/js/app/*.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('public_html/js'));
});

gulp.task('minifyHTML', function(){
    return gulp.src('public_html/index_dev.html')
    .pipe(htmlmin({collapseWhitespace: true, minifyJS:true,removeComments:true}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('public_html/'));
});


gulp.task('less', function() {
	return gulp.src('public_html/css/style.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('public_html/css'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('public_html/css/*.less', ['less']);
	gulp.watch('public_html/*.html', ['minifyHTML']);
	gulp.watch('public_html/**/*', livereload.reload);
	//gulp.watch(paths.allScripts, ['lint']);
	gulp.watch('public_html/js/app/*.js', ['scripts']);
});

gulp.task('default', ['watch']);