var gulp = require('gulp');

var compass = require('gulp-compass');

gulp.task('compass', function() {
    gulp.src('./scss/*.scss')
        .pipe(compass({
            comments: false,
            css: 'css',
            sass: 'scss',
            image: 'img'
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch',function(){
    gulp.watch('./scss/**',['compass']);
})

gulp.task('default', ['compass','watch']);
