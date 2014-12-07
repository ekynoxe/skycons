'use strict';

var gulp = require('gulp');
var pkg = require('./package.json');
var skyComponentHelper = require('gulp-sky-component-helper')(gulp, pkg);
var paths = skyComponentHelper.paths;
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

var iconfont = require("gulp-iconfont")
    , consolidate = require('gulp-consolidate')
    , lodash = require('lodash');

paths.source.fontSassTemplate = paths.source.root + '/skycons.scss';
paths.source.fontHtmlTemplate = paths.source.root + '/index.html';

gulp.task('copy-icons', function() {
    return gulp.src([paths.source['icons'] + '/*.svg'])
        .pipe(gulp.dest(paths.site['icons']));
});

gulp.task("skycons", function(){
    var fontName = 'skycons';
    return gulp.src(paths.source.icons + '/**/*.svg')
        .pipe(iconfont({
            fontName : fontName,
            fixedWidth : false,
            normalize: true,
            centerHorizontally: true
        }))
        .on('codepoints', function(codepoints) {
            var options = {
                glyphs: codepoints,
                fontName: fontName,
                fontPath: '../fonts/'
            };
            // Create CSS
            gulp.src(paths.source.fontSassTemplate)
                .pipe(consolidate('lodash',  options))
                .pipe(gulp.dest(paths.site['sass']));

            // Create HTML preview
            gulp.src(paths.source.fontHtmlTemplate)
                .pipe(consolidate('lodash', options))
                .pipe(gulp.dest(paths.site['root']));
        })
        .pipe(gulp.dest(paths.site['fonts']));
});


gulp.task('pre-build', function(cb){
    return runSequence('copy-icons','skycons', cb);
});