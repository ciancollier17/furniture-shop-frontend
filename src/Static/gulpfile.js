var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

gulp.task('css', function () {
  return gulp.src('Styles/*.css')
    .pipe(concat('master.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest('../../public/Styles'));
});

gulp.task('js', function () {
  return gulp.src('Scripts/*.js')
    .pipe(concat('scripts.js'))
    .pipe(minify())
    .pipe(gulp.dest('../../public/Scripts'));
})

gulp.task('img', function (done) {
    gulp.src('Img/*')
        .pipe(imagemin({verbose: true}))
        .pipe(gulp.dest('../../public/Img'));
    done();
});

gulp.task('fonts', function (done) {
  gulp.src('Fonts/*')
    .pipe(gulp.dest('../../public/Fonts'));
  done();
})

gulp.task('default', gulp.series('css', 'js', 'img', 'fonts'));

gulp.task('watch', function(done) {
  gulp.watch('**/*', gulp.series('default'));
});
