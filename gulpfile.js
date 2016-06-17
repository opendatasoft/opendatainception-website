var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var rename = require('gulp-rename');


gulp.task('less', function () {
    return gulp.src('less/main.less')
        .pipe(less({paths: 'less/*.less'}))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
    gulp.watch('less/*.less', ['less']);
});

gulp.task('default', ['watch']);
