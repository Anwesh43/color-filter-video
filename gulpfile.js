const gulp = require('gulp')
const gulp_concat = require('gulp-concat')
const gulp_uglify = require('gulp-uglify')
const browserify = require('browserify')
const gulp_rename = require('gulp-rename')
gulp.task('concatanduglifyclientfiles',()=>{
    gulp.src('./client/*.js').pipe(gulp_concat('videocolorfilter.js')).pipe(gulp.dest('dist')).pipe(gulp.dest('test'))
})
