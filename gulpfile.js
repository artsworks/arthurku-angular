'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');
var clean = require('gulp-clean');


/**
 * Constants
 * */
var jslibs = [
    './app/bower_components/angular/angular.js',
    './app/bower_components/angular-animate/angular-animate.js',
    './app/bower_components/angular-aria/angular-aria.js',
    './app/bower_components/angular-loader/angular-loader.js',
    './app/bower_components/angular-material/angular-material.js',
    './app/bower_components/angular-messages/angular-messages.js',
    './app/bower_components/angular-route/angular-route.js'
];
var csslibs = [
    './app/bower_components/angular/angular-csp.css',
    './app/bower_components/angular-material/angular-material.css'
];


gulp.task('default', ['dev']);
gulp.task('dev', ['html', 'img', 'csslibs', 'cssapp', 'jslibs', 'jsapp', 'connect', 'watch']);
gulp.task('build', ['html', 'img', 'csslibs', 'cssapp', 'jslibs', 'jsapp']);
gulp.task('clean', function () {
    return gulp.src(['dist/', 'app/templates.js'], {read: false})
        .pipe(clean());
});


/**
 * Development server
 * */
var connect = require('gulp-connect');
gulp.task('connect', function() {
    connect.server({
        root: 'dist/',
        port: 9000,
        livereload: true
    });
});


/**
 * HTML copy
 * */
var copy = require('gulp-copy');
gulp.task('html', function () {
    // return gulp.src(['./app/**/*.html','!./app/bower_components/**'])
    return gulp.src(['./app/index.html'])
        .pipe(copy('./dist/', {prefix: 1}))
        .pipe(connect.reload());
});
gulp.task('img', function () {
    return gulp.src(['./app/img/*'])
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
gulp.task('jsapp', ['templates'], function() {
    return gulp.src(['./app/**/*.js','!./app/bower_components/**'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});


/**
 * Style compiler
 * */
var less = require('gulp-less');
gulp.task('cssapp', function () {
    return gulp.src('./app/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
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
 * Templates compiler
 */
var templateCache = require('gulp-angular-templatecache');
gulp.task('templates', function () {
    return gulp.src(['./app/**/*.html', '!./app/index.html', '!./app/bower_components/**'])
        .pipe(templateCache('templates.js', {'module': 'aku'}))
        .pipe(gulp.dest('./app/'));
});


/**
 * Watchers
 * */
gulp.task('watch', function () {
    gulp.watch('./app/less/**/*.less', ['cssapp']);
    gulp.watch(['./app/**/*.js','!./app/bower_components/**'], ['jsapp']);
    gulp.watch(['./app/**/*.html','!./app/bower_components/**'], ['html']);
});