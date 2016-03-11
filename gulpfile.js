var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');


/**
 * Constants
 * */
var jslibs = [
    './app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
    './app/bower_components/angular/angular.js',
    './app/bower_components/angular-animate/angular-animate.js',
    './app/bower_components/angular-loader/angular-loader.js',
    './app/bower_components/angular-material/angular-material.js',
    './app/bower_components/angular-messages/angular-messages.js',
    './app/bower_components/angular-route/angular-route.js'
];
var csslibs = [
    './app/bower_components/html5-boilerplate/dist/css/main.css',
    './app/bower_components/angular/angular-csp.css',
    './app/bower_components/angular-material/angular-material.css'
];


gulp.task('default', ['html', 'csslibs', 'cssapp', 'jslibs', 'jsapp', 'connect', 'watch']);
gulp.task('dev', ['default'], function () {
    console.log('running dev task..');
});
gulp.task('build', ['html', 'csslibs', 'cssapp', 'jslibs', 'jsapp'], function () {
    console.log('running distribution task..');
});


/**
 * HTML copy
 * */
var copy = require('gulp-copy');
gulp.task('html', function () {
    return gulp.src(['./app/**/*.html','!./app/bower_components/**'])
        .pipe(copy('./dist/', {prefix: 1}));
});


/**
 * JS compiler
 * */
gulp.task('jslibs', function() {
    return gulp.src(jslibs)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});
gulp.task('jsapp', function() {
    return gulp.src(['./app/**/*.js','!./app/bower_components/**'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});


/**
 * Style compiler
 * */
var less = require('gulp-less');
gulp.task('cssapp', function () {
    return gulp.src('./app/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/'));
});
gulp.task('csslibs', function () {
    return gulp.src(csslibs)
        .pipe(concat('libs.css'))
        .pipe(cleancss({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest('./dist/'));
});


/**
 * Development server
 * */
var connect = require('gulp-connect');
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});


/**
 * Watchers
 * */
gulp.task('watch', function () {
    gulp.watch('./app/less/**/*.less', ['cssapp']);
    gulp.watch(['./app/**/*.js','!./app/bower_components/**'], ['jsapp']);
    gulp.watch(['./app/**/*.html','!./app/bower_components/**'], ['html']);
});