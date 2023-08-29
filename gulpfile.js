const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const formatHTML = require('gulp-format-html');
const cssbeautify = require('gulp-cssbeautify');
const csscomb = require('gulp-csscomb');
gulp.task('prefixer', async function(){
    gulp.src('app/css/style.css')
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('app/dist'))
})
gulp.task('minhtml', async function(){
    return gulp.src('app/res/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('app/dist'))
})
gulp.task('mincss', async function(){
    gulp.src('app/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/dist'))
})
gulp.task('minjs', async function(){
    return pipeline(
        gulp.src('app/js/*.js'),
        uglify(),
        gulp.dest('app/dist')
  )
})
gulp.task('formathtml', async function(){
    return gulp.src('app/res/*.html')
    .pipe(formatHTML())
    .pipe(gulp.dest('app/dist'))
})
gulp.task('formatcss', async function(){
    return gulp.src('app/css/*.css')
    .pipe(cssbeautify())
    .pipe(gulp.dest('app/dist'))
})
gulp.task('csscomb', async function(){
    return gulp.src('css/style.css')
    .pipe(csscomb())
    .pipe(gulp.dest('app/dist'));
})