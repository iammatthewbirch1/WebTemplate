var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('scss', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('uglify', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['browser-sync', 'scss', 'uglify'], function(){
  gulp.watch('src/sass/*.scss', ['scss']);
  gulp.watch('src/js/*.js', ['uglify']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('browser-sync', function(){
  browserSync.init({
      server: {
        baseDir: "./"
      }
  });
});
