const gulp = require('gulp'),
  sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp
    .src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', () => {
  gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('generate-service-worker', function(callback) {
  var swPrecache = require('sw-precache');
  var rootDir = './app';

  swPrecache.write(
    `${rootDir}/service-worker.js`,
    {
      staticFileGlobs: [
        rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'
      ],
      stripPrefix: rootDir
    },
    callback
  );
});
